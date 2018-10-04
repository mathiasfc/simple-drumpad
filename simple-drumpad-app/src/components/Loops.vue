<template>
<div id="loops">
    <div class="loop-empty" v-for="loop in loops" @click="testFunction(loop.key)">
        {{defaultMessage}}
    </div>

    <!--
    <div class="loop-empty" data-key="48">
        Empty loop
    </div>
    -->
</div>
</template>

<script>
export default {
    name: 'Loops',
    data() {
        return {
            defaultMessage: 'Empty loop',
            loops: [{
                    key: 49
                },
                {
                    key: 50
                },
                {
                    key: 51
                },
                {
                    key: 52
                },
                {
                    key: 53
                },
                {
                    key: 54
                },
                {
                    key: 55
                },
                {
                    key: 56
                },
                {
                    key: 57
                },
                {
                    key: 48
                }
            ]
        }
    },

    methods: {
        testFunction(x) {
            alert(x);
        }
    }

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
