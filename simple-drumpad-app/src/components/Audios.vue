<template>
<<<<<<< HEAD
<div id="audios">

    <!--<audio loop id="Kick" data-key="71">
        <source src="http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav"/>
    </audio>

    <audio loop id="DjNoise" data-key="72">
        <source src="http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav" />
    </audio>-->

    <!-- trying audio preload 
    <audio ref="audio" :src="audios[0].src" preload="auto"></audio>-->
</div>
=======
  <div id="audios">
  </div>
>>>>>>> 612405813a01546c2b5ac383159e5bc6fd66d2ac
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
      ],
      preloadedSounds: []
    };
  },
  mounted() {
    this.preLoadSounds();
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
        //when loadedAudio() fires the file will be kept by the browser as cache
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

      /*let soundObj = this.preloadedSounds.find(sound => {
        return sound.key === key;
      });

      if (soundObj) {
        console.log(soundObj);
        soundObj.sound.play();
      }*/
    },
    preLoadSounds() {
      /*this.audios.forEach(audio => {
        let sound = document.createElement('audio');
        sound.id = audio.key;
        sound.src = audio.src;
        //let isAppLoaded = true;
        //sound.addEventListener('canplaythrough', isAppLoaded, false);
        sound.load();
        var soundObj = {
          key: audio.key,
          sound: sound
        };
        console.warn(soundObj);
        this.preloadedSounds.push(soundObj);
      });*/
    }
  }
};
</script>

<style lang="scss" scoped>
#audios {
  display: none;
}
</style>
