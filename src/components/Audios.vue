<template>
  <div id="audios"></div>
</template>

<script>
import { Bus } from "../main.js";
import audios from "../samples/samples.js";
import helper from "../helper/index";
import { setTimeout } from "timers";

export default {
  name: "Audios",
  data() {
    return {
      selectedGenre: "hiphop",
      audioItems: audios,
      loadedAllPads: false,
      volume: 1,
      topKeys: [69, 73, 79, 80, 81, 82, 84, 85, 87, 89],
      midKeys: [65, 68, 70, 71, 72, 74, 75, 76, 83, 186],
      bottomKeys: [66, 67, 77, 78, 86, 88, 90, 188],
      // numPadKeys: [97, 98, 99, 100, 101, 102, 103, 104, 105]
      numPadKeys: [97, 98, 99, 100],
      acitiveLoops: []
    };
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

    Bus.$on("volumeChanged", volume => {
      this.volume = volume;
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
      sound.volume = this.volume;

      if (sound) {
        //if not loaded all mute audio
        if (!this.loadedAllPads) {
          sound.muted = "true";
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
      sound.volume = this.volume;
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
        if (index === allPads.length - 1) {
          this.loadedAllPads = true;
        }
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
</style>
