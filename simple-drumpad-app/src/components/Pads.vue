<template>
<div id="pads">
    <div class="wrapper-left">
        <!-- first-->
        <div class="pad ripple" data-key="81" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="87" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="69" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="82" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="84" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="89" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="85" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="73" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="79" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="80" data-ripple-color="blue"> </div>

        <!-- second-->
        <div class="pad ripple" data-key="65" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="83" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="68" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="70" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="71" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="72" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="74" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="75" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="76" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="186" data-ripple-color="blue"> </div>

        <!-- third-->
        <div class="pad ripple" data-key="90" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="88" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="67" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="86" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="66" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="78" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="77" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="188" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="190" data-ripple-color="blue"> </div>
        <div class="pad ripple" data-key="191" data-ripple-color="blue"> </div>

    </div>

    <div class="wrapper-right">
        <div class="pad" loop="true" data-key="103"> </div>
        <div class="pad" loop="true" data-key="104"> </div>
        <div class="pad" loop="true" data-key="105"> </div>
        <div class="pad" loop="true" data-key="100"> </div>
        <div class="pad" loop="true" data-key="101"> </div>
        <div class="pad" loop="true" data-key="102"> </div>
        <div class="pad" loop="true" data-key="97"> </div>
        <div class="pad" loop="true" data-key="98"> </div>
        <div class="pad" loop="true" data-key="99"> </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Pads',
    props: {}
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
