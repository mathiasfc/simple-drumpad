<template>
<div id="config-panel">
    <span class="custom-dropdown">
     <select @change="onSelectChange" v-model="selected">    
        <option v-for="(opt, index) in options" :key="index">
            {{opt}}
        </option>
     </select> 
     </span>
    <input type="button" class="btnControls" value="ⓘ Controls" id="btnControls" @click="toggleInfos" />
</div>
</template>

<script>
import { Bus } from '../main.js';

export default {
  name: 'ConfigPanel',
  data() {
    return {
      selected: 'Hip Hop',
      options: ['Hip Hop', 'Jazz', 'Reaggeton']
    };
  },
  methods: {
    toggleInfos() {
      Bus.$emit('toggleInfos', true);
    },
    onSelectChange() {
      console.log(this.key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#config-panel {
  height: 60px;

  .custom-dropdown {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    margin-left: 21px;
    margin-top: 10px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      pointer-events: none;
    }

    &:after {
      content: '\25BC';
      height: 1em;
      font-size: 0.625em;
      line-height: 1;
      right: 1.2em;
      top: 50%;
      margin-top: -0.5em;
    }

    &:before {
      width: 2em;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 0 3px 3px 0;
    }

    select[disabled] {
      color: rgba(0, 0, 0, 0.3);
    }

    select[disabled]::after {
      color: rgba(0, 0, 0, 0.1);
    }

    &:before {
      background-color: rgba(0, 0, 0, 0.15);
    }

    &:after {
      color: rgba(0, 0, 0, 0.4);
    }

    select {
      cursor: pointer;
      background-color: #5f5f5f;
      color: white;
      font-size: 13px;
      padding: 0.5em;
      padding-right: 2.5em;
      border: 0;
      margin: 0;
      border-radius: 3px;
      text-indent: 0.01px;
      text-overflow: '';
      -webkit-appearance: button;
      width: 115px;
      height: 40px;
    }
  }

  .btnControls {
    float: right;
    margin-right: 27px;
    margin-top: 12px;
    background-color: #5f5f5f;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 13px;
    width: 115px;
    height: 40px;
    border-radius: 2px;
    padding: 10px;

    &:focus {
      outline: 0;
    }
  }
}
</style>
