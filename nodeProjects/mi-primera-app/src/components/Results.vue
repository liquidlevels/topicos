<template>
    <h1>{{resultado}}</h1>
</template>

<script>
import { toNumber } from '@vue/shared';

    export default {
        props: {
            resultado: toNumber,
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