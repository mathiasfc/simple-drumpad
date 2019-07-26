<template>
<div v-if="howToUse">
  <div class="backgroundDiv" @click="toggleInfo"></div>
  <div class="messagepop pop">
    <h1 style="text-align:center;">Keyboard</h1><br>
    <span><b>0-9:</b> Record your loops <span style="color:red;"> [In progress...]</span></span><br><br>
    <span><b>(Q-P):</b> Hat's <span style="color:red;"> [TODO]</span> </span><br><br>
    <span><b>(A-;):</b> Clap's / Kick's</span><span style="color:red;"> [TODO]</span><br><br>
    <span><b>(Z-?):</b> Voice's <span style="color:red;"> [TODO]</span> </span><br><br>
    <span><b>Numpad's (0-9)</b> Effect's <span style="color:red;"> [TODO]</span> </span><br>
    <span style="font-size:14px; float:right;">*Press [esc] to clear all loop's.</span>
  </div>
</div>
</template>

<script>
import { Bus } from '../main.js';

export default {
  name: 'ControlsInfo',
  data() {
    return {
      howToUse: false
    };
  },
  created() {
    Bus.$on('toggleInfos', howToUse => {
      this.howToUse = howToUse;
    });
  },
  methods: {
    toggleInfo() {
      this.howToUse = !this.howToUse;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.messagepop {
  position: fixed;
  top: 45%;
  left: 50%;
  width: 30em;
  height: 20em;
  margin-top: -9em;
  margin-left: -15em;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  padding: 15px;
  background: #1b1b1b;
  opacity: 0.9;
  color: white;
  z-index: 2;
}

.backgroundDiv {
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.4;
  background: black;
}
</style>
