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

export default {
  name: 'Audios',
  data() {
    return {
      audios: [
        {
          key: 71,
          name: 'snare',
          src: 'http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav'
        },
        {
          key: 72,
          name: 'clap',
          src: 'http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav'
        }
      ],
      preloadedSounds: []
    };
  },
  mounted() {
    this.preLoadSounds();
  },
  created() {
    Bus.$on('playAudio', keydown => {
      this.playSoundKey(keydown.keyCode);
    });
  },
  methods: {
    playSoundKey(key) {
      let audio = this.audios.find(obj => {
        return obj.key === key;
      });
      if (audio) {
        let sound = document.createElement('audio');
        sound.src = audio.src;
        sound.play();
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
