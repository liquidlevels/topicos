<template>
    <h1>{{texto}}</h1>
</template>

<script>
    export default {
        props: {
            texto: String,
        }
    }
</script>

<style>

    h1{
        display:flex;
        flex:column;
        justify-content: center;
        align-items: center;
    }
</style>