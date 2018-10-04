<template>
<div id="audios">

    <audio v-for="audio in audios" :name="audio.name" :data-key="audio.key" loop >
        <source :src="audio.src" preload="auto" type="audio/wav" />
    </audio>

</div>
</template>

<script>
export default {
    name: 'Audios',
    data() {
        return {
            audios: [{
                    key: '65',
                    name: 'snare',
                    src: 'http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Jay.wav'
                },
                {
                    key: '83',
                    name: 'clap',
                    src: 'http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Dance.wav'
                }
            ]
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
