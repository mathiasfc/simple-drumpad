<template>
  <div
    class="drumpad-background"
    :style="{ backgroundImage: `url(${wpp})` }"
  ></div>
</template>

<script>
import { Bus } from "../main.js";
import firstImage from "../assets/wallpapers/1.png";
import secondImage from "../assets/wallpapers/2.png";
import thirdImage from "../assets/wallpapers/3.png";
import fourthImage from "../assets/wallpapers/4.jpg";
import fifthImage from "../assets/wallpapers/5.png";

export default {
  name: "Background",
  data() {
    return {
      backgrounds: [
        firstImage,
        secondImage,
        thirdImage,
        fourthImage,
        fifthImage
      ],
      bgInterval: "",
      wpp: firstImage
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
        image.src = item;
      });
    },
    changeBackground() {
      let count = 0;
      this.bgInterval = setInterval(() => {
        this.wpp = this.backgrounds[count];
        count = count >= 4 ? 0 : count + 1;
      }, 30000);
    }
  }
};
</script>
<style lang="scss" scoped>
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
</style>
