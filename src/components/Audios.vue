<template>
  <div>
    <div id="audios"></div>
    <loading
      :active.sync="!this.loadedAllPads"
      :is-full-page="true"
      background-color="#000"
      color="#FFF"
    >
      <span class="span-loading">Loading...</span>
    </loading>
    <ProgressBar
      v-if="this.loadingProgress < 96 || !this.loadedAllPads"
      :progress="this.loadingProgress"
    />
  </div>
</template>

<script>
import { Bus } from "../main.js";
import ProgressBar from "../components/ProgressBar";
import helper from "../helper/index";
import { setTimeout } from "timers";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Audios",
  data() {
    return {
      selectedGenre: "hiphop",
      loadedAllPads: false,
      loadingProgress: 0,
      topKeys: [69, 73, 79, 80, 81, 82, 84, 85, 87, 89],
      midKeys: [65, 68, 70, 71, 72, 74, 75, 76, 83, 186],
      bottomKeys: [66, 67, 77, 78, 86, 88, 90, 188],
      // numPadKeys: [97, 98, 99, 100, 101, 102, 103, 104, 105]
      numPadKeys: [97, 98, 99, 100],
      acitiveLoops: [],
      padsLoaded: 0
    };
  },
  components: {
    Loading,
    ProgressBar
  },
  mounted() {
    this.preLoadSounds();
  },
  created() {
    Bus.$on("genreChanged", genre => {
      switch (genre) {
        case "Hip Hop":
          this.selectedGenre = "hiphop";
          break;
        case "Jazz":
          this.selectedGenre = "jazz";
          break;
      }
    });

    Bus.$on("playAudio", keydown => {
      this.playSoundKey(keydown.keyCode);
    });
  },
  methods: {
    playSoundKey(key) {
      let path = this.getAudioPath(key);
      let format = path === "numpad" ? "mp3" : "wav";
      var audio = require(`../assets/audios/hiphop/${path}/${key}.${format}`);
      var sound = new Audio(audio);

      if (sound) {
        //if not loaded all mute audio
        if (!this.loadedAllPads) {
          sound.muted = "true";
          sound.addEventListener("canplay", () => {
            const allPads = [
              ...this.topKeys,
              ...this.midKeys,
              ...this.bottomKeys,
              ...this.numPadKeys
            ];
            this.padsLoaded += 1;
            this.loadingProgress += 3.1;
            if (this.padsLoaded === allPads.length - 1) {
              this.loadedAllPads = true;
            }
          });
        }

        if (this.isNormalKey(key)) {
          sound.play();
        } else if (this.isNumPadKey(key)) {
          if (this.loadedAllPads) {
            const activeLoop = this.acitiveLoops.filter(e => e.key === key)[0];
            if (activeLoop) {
              this.stopLoop(key, activeLoop.sound);
            } else {
              this.startLoop(key, sound);
            }
          }
        }
      }
    },
    startProgress(key, sound) {
      const slider = document.getElementsByClassName(`range-${key}`)[0];
      sound.addEventListener("timeupdate", () => {
        const currentTime = sound.currentTime;
        let percent = Math.min((10 / sound.duration) * currentTime * 10, 100);
        slider.style.width = percent + "%";
        if (percent >= 98) {
          console.log("stoped all");
          percent = 0;
          sound.pause();
          sound.currentTime = 0;
          sound.play();
          this.resetProgress(sound, slider);
        }
        const activeLoop = this.acitiveLoops.some(e => e.key === key);

        if (!activeLoop) {
          this.resetProgress(sound, slider);
          sound.pause();
        }
      });
    },
    resetProgress(sound, slider) {
      slider.style.width = 0;
    },
    startLoop(key, sound) {
      let path = this.getAudioPath(key);
      let format = path === "numpad" ? "mp3" : "wav";
      var audio = require(`../assets/audios/hiphop/${path}/${key}.${format}`);
      var sound = new Audio(audio);
      this.acitiveLoops.push({
        key,
        sound
      });

      this.startProgress(key, sound);
      sound.play();
    },
    stopLoop(key, sound) {
      sound.pause();
      this.acitiveLoops.splice(
        this.acitiveLoops.findIndex(e => e.key === key),
        1
      );
    },
    checkUserCookies() {
      //If had selected genre, set as default
    },
    preLoadSounds() {
      const allPads = [
        ...this.topKeys,
        ...this.midKeys,
        ...this.bottomKeys,
        ...this.numPadKeys
      ];
      allPads.forEach((key, index) => {
        this.playSoundKey(key);

        // if (index === allPads.length - 1) {
        //   this.loadedAllPads = true;
        // }
      });
    },
    getAudioPath(key) {
      if (this.topKeys.includes(key)) {
        return "top";
      } else if (this.midKeys.includes(key)) {
        return "mid";
      } else if (this.bottomKeys.includes(key)) {
        return "bottom";
      } else if (this.numPadKeys.includes(key)) {
        return "numpad";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#audios {
  display: none;
}

.span-loading {
  color: white !important;
}
</style>
