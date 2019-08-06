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
      topKeys: [69, 73, 79, 80, 81, 82, 84, 85, 87, 89],
      midKeys: [65, 68, 70, 71, 72, 74, 75, 76, 83, 186]
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
      let path;
      if (this.topKeys.includes(key)) {
        path = "top";
      } else if (this.midKeys.includes(key)) {
        path = "mid";
      }
      var audio = require(`../assets/audios/hiphop/${path}/${key}.wav`);
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
