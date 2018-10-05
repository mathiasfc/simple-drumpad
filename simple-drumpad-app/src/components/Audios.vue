<template>
<div id="audios">

    <audio loop id="Kick" data-key="71">
        <source src="http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav"/>
    </audio>

    <audio loop id="DjNoise" data-key="72">
        <source src="http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav" />
    </audio>

</div>
</template>

<script>
import {
    Bus
} from '../main.js';

export default {
    name: 'Audios',
    data() {
        return {
            audios: [{
                    key: 71,
                    name: 'snare',
                    src: 'http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav'
                },
                {
                    key: 72,
                    name: 'clap',
                    src: 'http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav'
                }
            ]
        }
    },
    created() {
        Bus.$on('playAudio', (keydown) => {
            this.playSoundKey(keydown.keyCode);
        });
    },
    methods: {
        playSoundKey(key) {
            let audio = this.audios.find((obj) => {
                return obj.key === key
            });
            if (audio) {
                let sound = document.createElement("audio");
                sound.src = audio.src;
                sound.play();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#audios {
    display: none;
}
</style>
