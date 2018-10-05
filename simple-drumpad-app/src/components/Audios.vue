<template>
  <div id="audios">
  </div>
</template>

<script>
import { Bus } from "../main.js";

export default {
  name: "Audios",
  data() {
    return {
      audiosLoaded: [],
      audiosReady: false,
      audios: [
        {
          key: 71,
          name: "snare",
          src: "http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav"
        },
        {
          key: 72,
          name: "clap",
          src: "http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav"
        }
      ]
    };
  },
  created() {
    this.preLoadAudios();

    Bus.$on("playAudio", keydown => {
      this.playSoundKey(keydown.keyCode);
    });
  },
  methods: {
    playSoundKey(key) {
      if (this.audiosReady) {
        let audio = this.audios.find(obj => {
          return obj.key === key;
        });
        if (audio) {
          let sound = document.createElement("audio");
          sound.src = audio.src;
          sound.play();
        }
      }
    },
    preLoadAudios() {
      this.audios.forEach(element => {
        var audio = new Audio();
        var objAudio = {
          audio: audio,
          key: element.key
        };
        // once this file loads, it will call loadedAudio()
        // the file will be kept by the browser as cache
        audio.src = element.src;
        audio.addEventListener("canplaythrough", this.loadedAudio(objAudio), false);
      });
    },
    loadedAudio(objAudio) {
      this.audiosLoaded.push(objAudio);
      if (this.audiosLoaded.length == this.audios.length) {
        this.audiosReady = true;
        console.warn("All audios loaded");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#audios {
  display: none;
}
</style>
