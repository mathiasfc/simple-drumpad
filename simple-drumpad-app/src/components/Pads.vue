<template>
<div id="pads">
    <div class="wrapper-left">
        <div class="pad" v-for="key in firstline" :data-key="key"></div>
        <div class="pad" v-for="key in secondLine" :data-key="key"></div>
        <div class="pad" v-for="key in thirdLine" :data-key="key"></div>
    </div>

    <div class="wrapper-right">
        <div class="pad" v-for="key in rightPads" :data-key="key"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Pads',
    data() {
        return {
            firstline: [82, 87, 69, 82, 84, 89, 85, 73, 79, 80],
            secondLine: [65, 83, 68, 70, 71, 72, 74, 75, 76, 186],
            thirdLine: [90, 88, 67, 86, 66, 78, 77, 188, 190, 191],
            rightPads: [103, 104, 105, 100, 101, 102, 97, 98, 99]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#pads {
    width: 100%;
    height: 200px;
    margin-top: 40px;

    .wrapper-left {
        display: grid;
        grid-template-columns: repeat(10, 9%);
        grid-gap: 5px;
        color: #444;
        float: left;
        width: 70%;
        margin-left: 20px;

        .pad {
            background: #252528;
            width: auto;
            height: 60px;
            border-radius: 2px;
            position: relative;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }

    .wrapper-right {
        display: grid;
        grid-template-columns: repeat(3, 31%);
        grid-gap: 5px;
        color: #444;
        width: 20%;
        float: right;
        margin-right: 20px;

        .pad {
            background: #252528;
            width: auto;
            height: 60px;
            border-radius: 2px;
            position: relative;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
}
</style>
