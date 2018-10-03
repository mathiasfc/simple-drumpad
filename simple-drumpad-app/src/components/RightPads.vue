<template>
<ul class="rightpads">
    <li>
        <div class="pad" loop="true" data-key="103"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="104"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="105"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="100"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="101"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="102"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="97"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="98"> </div>
    </li>
    <li>
        <div class="pad" loop="true" data-key="99"> </div>
    </li>

</ul>
</template>

<script>
export default {
    name: 'RightPads',
    props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.rightpads {
    float: right;
    width: 270px;
    margin-right: 9px;

    .pad {
        border: 1px solid grey;
        height: 65px;
        width: 65px;
        background: #DAE2F8;
        border-radius: 2px;
        position: relative;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .paused {
        background-color: #5d4d19;
        color: white;
        opacity: 1;
    }

}
</style>
