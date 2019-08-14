<template>
  <!-- <div class="drumpad-background" :style="{'background-image': `url(${require('./assets/wallpapers/nbig.jpg')})`}"> -->
  <div class="drumpad-background">
    <div id="drumpad" class="container">
      <ConfigPanel />
      <Loops />
      <Pads />
      <ControlsInfo />
      <Audios />
    </div>
  </div>
</template>

<script>
import ConfigPanel from "./components/ConfigPanel.vue";
import Loops from "./components/Loops.vue";
import Pads from "./components/Pads.vue";
import ControlsInfo from "./components/ControlsInfo.vue";
import Audios from "./components/Audios.vue";
import NotoriousWallpaper from "./assets/wallpapers/nbig.jpg";

export default {
  name: "app",
  components: {
    ConfigPanel,
    Loops,
    Pads,
    ControlsInfo,
    Audios
  }
};
</script>

<style lang="scss">
body {
  background: black;
  font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
  opacity: 1;
  margin: 0;
}

.drumpad-background {
  position: fixed;
  background: black;
  height: 100vh;
  width: 100vw;
}

ul {
  list-style-type: none;
  padding: 5px 5px 5px 5px;
}

li {
  display: inline-block;
}

.container {
  width: 95%;
  min-width: 700px;
  max-width: 1500px;
  padding-top: 10px;
  border-radius: 5px;
  height: 380px;
  margin: 0 auto;
  margin-top: 50px;
  background: #000000;
  background: -webkit-linear-gradient(to right, #434343, #080808);
  background: linear-gradient(to right, #434343, #080808);
}
</style>
