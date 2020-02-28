<template>
  <div class="container">
    <div class="bg-cb">
      <input type="checkbox" id="checkbox" v-model="disableBg" />
      <span>Disable background</span>
    </div>
    <Background v-if="!disableBg" />
    <div id="drumpad" class="gradient-border">
      <ConfigPanel />
      <Loops />
      <Pads />
      <ControlsInfo />
      <Audios />
    </div>
  </div>
</template>

<script>
import Background from "./components/Background.vue";
import ConfigPanel from "./components/ConfigPanel.vue";
import Loops from "./components/Loops.vue";
import Pads from "./components/Pads.vue";
import ControlsInfo from "./components/ControlsInfo.vue";
import Audios from "./components/Audios.vue";

export default {
  name: "app",
  components: {
    Background,
    ConfigPanel,
    Loops,
    Pads,
    ControlsInfo,
    Audios
  },
  data() {
    return {
      disableBg: false
    };
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

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.bg-cb {
  position: absolute;
  top: 20px;
  right: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  border-radius: 10px;

  input {
    margin-right: 10px;
  }
}

ul {
  list-style-type: none;
  padding: 5px 5px 5px 5px;
}

li {
  display: inline-block;
}

#drumpad {
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

.gradient-border {
  --border-width: 3px;
  position: relative;
  background: #222;
  border-radius: var(--border-width);

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      rgba(57, 182, 255, 0.5),
      rgba(77, 77, 255, 0.5),
      rgba(175, 78, 255, 0.5)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 5s alternate infinite;
  }
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>
