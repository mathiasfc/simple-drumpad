<template>
  <div id="progress">
    <div id="progress-line" :style="`width:${this.progress}%`"></div>
  </div>
</template>

<script>
import { Bus } from "../main.js";

export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  props: ["progress"],
  created() {
    console.log("teste" + this.progress);
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#progress {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 15em;
  max-width: 500px;
  height: 0.5em;
  margin-top: 2em; /*set to a negative number 1/2 of your height*/
  margin-left: -8em; /*set to a negative number 1/2 of your width*/
  border: 1px solid white;
  border-radius: 3px;
  background: transparent;
  z-index: 99999;

  #progress-line {
    background: white;
    position: initial;
    height: 100%;
  }
}
</style>
