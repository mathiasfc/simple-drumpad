<template>
  <div class="container">
    <div
      class="drumpad-background"
      :style="{
        'background-image': `url(${require('' + wpp + '')})`
      }"
    ></div>
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
import ConfigPanel from "./components/ConfigPanel.vue";
import Loops from "./components/Loops.vue";
import Pads from "./components/Pads.vue";
import ControlsInfo from "./components/ControlsInfo.vue";
import Audios from "./components/Audios.vue";

export default {
  name: "app",
  components: {
    ConfigPanel,
    Loops,
    Pads,
    ControlsInfo,
    Audios
  },
  data() {
    return {
      backgrounds: ["1.png", "2.png", "3.png", "4.jpg", "5.png"],
      bgInterval: "",
      wpp: "./assets/wallpapers/1.png"
    };
  },
  mounted() {
    this.preLoadImages();
    this.changeBackground();
  },
  beforeDestroy() {
    clearInterval(this.bgInterval);
  },
  methods: {
    preLoadImages() {
      this.backgrounds.forEach(item => {
        let image = new Image();
        let path = `./assets/wallpapers/${item}`;
        image.src = require("" + path + "");
      });
    },
    changeBackground() {
      let count = 0;
      this.bgInterval = setInterval(() => {
        this.wpp = `./assets/wallpapers/${this.backgrounds[count]}`;
        count = count >= 4 ? 0 : count + 1;
      }, 15000);
    }
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

.drumpad-background {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  filter: blur(3px) grayscale(1);
  background-size: contain;
  transition: background-image 2s ease-in-out;
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
