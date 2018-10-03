<template>
<div id="loops">
    <div class="loop-empty" data-key="49">
        Empty loop
    </div>
    <div class="loop-empty" data-key="50">
        Empty loop
    </div>
    <div class="loop-empty" data-key="51">
        Empty loop
    </div>
    <div class="loop-empty" data-key="52">
        Empty loop
    </div>
    <div class="loop-empty" data-key="53">
        Empty loop
    </div>
    <div class="loop-empty" data-key="54">
        Empty loop
    </div>
    <div class="loop-empty" data-key="55">
        Empty loop
    </div>
    <div class="loop-empty" data-key="56">
        Empty loop
    </div>
    <div class="loop-empty" data-key="57">
        Empty loop
    </div>
    <div class="loop-empty" data-key="48">
        Empty loop
    </div>
</div>
</template>

<script>
export default {
    name: 'Loops',
    props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#loops {
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 97%;
    margin-left: 16px;
    padding: 0px 0px 0px 0px;

    div {
        height: 50px;
        width: 10%;
        margin: 5px;
        border-radius: 2px;
        position: relative;
        border: none;
        outline: none;
        cursor: pointer;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
    }

    .loop-empty {
        background: #DAE2F8;
        opacity: 0.1;
        color: gray;
    }

    .loop-recording {
        background: red;
        opacity: 1;
        color: white;
    }

    .loop-ready {
        border: 1px solid grey;
        background: green;
        opacity: 1;
        color: white;
    }
}
</style>
