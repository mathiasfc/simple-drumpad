<template>
<div id="drumpad" class="container">
    <ConfigPanel />
    
</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    components: {
        //HelloWorld
    }
}
</script>

<style lang="scss">
body {
    background: black;
}

.container {
    width: 80%;
    border: 1px solid grey;
    height: 380px;
    margin: 0 auto;
    background: #000000;
    background: -webkit-linear-gradient(to right, #434343, #000000);
    background: linear-gradient(to right, #434343, #000000);
}
</style>
