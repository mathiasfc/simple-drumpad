<template>
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
</template>

<script>
import { Bus } from '../main.js';
import audios from '../samples/samples.js';

export default {
  name: 'Audios',
  data() {
    return {
      selectedGenre: 'hiphop',
      audiosLoaded: [],
      audiosReady: false,
      audioItems: audios,
      preloadedSounds: []
    };
  },
  mounted() {
    //this.preLoadSounds();
  },
  created() {
    Bus.$on('genreChanged', genre => {
      switch (genre) {
        case 'Hip Hop':
          this.selectedGenre = 'hiphop';
          break;
        case 'Jazz':
          this.selectedGenre = 'jazz';
          break;
      }
    });

    this.preLoadAudios();

    Bus.$on('playAudio', keydown => {
      this.playSoundKey(keydown.keyCode);
      console.warn(this.selectedGenre);
    });
  },
  methods: {
    playSoundKey(key) {
      if (this.audiosReady) {
        let audio = this.audioItems[this.selectedGenre].find(obj => {
          return obj.key === key;
        });
        if (audio) {
          let sound = document.createElement('audio');
          sound.src = audio.src;
          sound.play();
        }
      }
    },
    preLoadAudios() {
      this.audioItems[this.selectedGenre].forEach(element => {
        var audio = new Audio();
        var objAudio = {
          audio: audio,
          key: element.key
        };
        //when loadedAudio() fires the file will be kept by the browser as cache
        audio.src = element.src;
        audio.addEventListener('canplaythrough', this.loadedAudio(objAudio), false);
      });
    },
    loadedAudio(objAudio) {
      this.audiosLoaded.push(objAudio);
      if (this.audiosLoaded.length == this.audioItems[this.selectedGenre].length) {
        this.audiosReady = true;
        console.warn('All audios loaded');
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
