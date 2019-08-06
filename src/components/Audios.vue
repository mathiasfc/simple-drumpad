<template>
  <div id="audios"></div>
</template>

<script>
import { Bus } from "../main.js";
import audios from "../samples/samples.js";

export default {
  name: "Audios",
  data() {
    return {
      selectedGenre: "hiphop",
      audioItems: audios,
      loadedAllPads: false,
      topKeys: [69, 73, 79, 80, 81, 82, 84, 85, 87, 89],
      midKeys: [65, 68, 70, 71, 72, 74, 75, 76, 83, 186],
      // numPadKeys: [97, 98, 99, 100, 101, 102, 103, 104, 105]
      numPadKeys: [97, 98, 99, 100]
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

    Bus.$on("playAudio", keydown => {
      this.playSoundKey(keydown.keyCode);
      console.log(this.selectedGenre);
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
        }
        sound.play();
      }
    },
    checkUserCookies() {
      //If had selected genre, set as default
    },
    preLoadSounds() {
      const allPads = [...this.topKeys, ...this.midKeys, ...this.numPadKeys];
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
