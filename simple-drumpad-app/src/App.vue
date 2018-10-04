<template>
<div id="drumpad" class="container">
    <ConfigPanel />
    <Loops />
    <Pads />
</div>
</template>

<script>
import ConfigPanel from './components/ConfigPanel.vue'
import Loops from './components/Loops.vue'
import Pads from './components/Pads.vue'

export default {
    name: 'app',
    components: {
        ConfigPanel,
        Loops,
        Pads
    }
}

</script>

<style lang="scss">
body {
    background: black;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
}

ul {
    list-style-type: none;
    padding: 5px 5px 5px 5px;
}

li {
    display: inline-block;
}

.container {
    width: 95%;
    min-width: 700px;
    max-width: 2000px;
    border: 1px solid grey;
    height: 380px;
    margin: 0 auto;
    background: #000000;
    background: -webkit-linear-gradient(to right, #434343, #000000);
    background: linear-gradient(to right, #434343, #000000);
}
</style>
