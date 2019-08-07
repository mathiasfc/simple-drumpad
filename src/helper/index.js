import Vue from "vue";

Vue.mixin({
  methods: {
    isNumPadKey: key => key >= 97 && key <= 105,
    isNormalKey: key => (key >= 65 && key <= 90) || key === 186
  }
});
