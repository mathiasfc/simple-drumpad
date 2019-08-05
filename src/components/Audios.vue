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
      audioItems: audios
    };
  },
  mounted() {
    //this.preLoadSounds();
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

    //this.preLoadAudios();

    Bus.$on("playAudio", keydown => {
      this.playSoundKey(keydown.keyCode);
      console.log(this.selectedGenre);
    });
  },
  methods: {
    playSoundKey(key) {
      var audio = require(`../assets/audios/hiphop/${key}.wav`);
      var sound = new Audio(audio);
      if (sound) {
        sound.play();
      }
    },
    checkUserCookies() {
      //If had selected genre, set as default
    }
  }
};
</script>

<style lang="scss" scoped>
#audios {
  display: none;
}
</style>
