<template>
<div id="config-panel">
    <span class="custom-dropdown">
     <select>    
            <option>Hip Hop</option>
            <option>Jazz</option>  
            <option>Reaggeton</option>
     </select> 
     </span>
    <input type="button" class="btnControls" value="Controls" id="btnControls" />
</div>
</template>

<script>
export default {
    name: 'ConfigPanel',
    props: {}
}
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
        margin-left: 14px;

        &:before,
        &:after {
            content: "";
            position: absolute;
            pointer-events: none;
        }

        select {
            cursor: pointer;
            background-color: #5f5f5f;
            color: white;
            font-size: inherit;
            padding: .5em;
            padding-right: 2.5em;
            border: 0;
            margin: 0;
            border-radius: 3px;
            text-indent: 0.01px;
            text-overflow: '';
            -webkit-appearance: button;
            /* hide default arrow in chrome OSX */
        }
    }

    .btnControls {
        float: right;
        margin-right: 15px;
        margin-top: 10px;
        background-color: #5f5f5f;
        cursor: pointer;
        border: none;
        color: white;
        font-size: 15px;
        border-radius: 8px;
        padding: 10px;

        &:focus {
            outline: 0;
        }
    }
}
</style>
