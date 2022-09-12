<template>
    <h1>{{texto}}</h1>
</template>

<script>
    export default {
        data(){
            return{
            
            }
        },

        props:{
            texto: String,
        },

    }

</script>

<style scoped>
    h1{
        color: white;
        font-size: 3rem;
    }

</style>