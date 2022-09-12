<script setup>
    import Publicacion from './Publicacion.vue'
</script>

<template>
    <div class="main">
        <h1>Has iniciado sesión</h1>
        <textarea name="" id="" placeholder="¿En que estas pensando?" v-model="publicacionUsuario"></textarea>
        <button @click="agregarPost">Publicar</button>
        <hr>
        <div class="publicaciones">
            <div v-for="publicacion in listaPublicaciones" :key="publicacion.key">
                <Publicacion :publicacion="publicacion" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                publicacionUsuario: '',
                listaPublicaciones: [],
            }
        },

        components:{
            Publicacion,
        },

        methods:{
            agregarPost(){
                this.listaPublicaciones.unshift(this.publicacionUsuario)
                this.publicacionUsuario = ''
            }
        }
    }
</script>

<style scoped>
    .main h1{
        color:white;
        font-size: 3rem;
    }

    .main textarea{
        color: white;
        background: none;
        outline: none;
        border: none;
        border-radius: .5rem;
        width: 30rem;
        height: 10rem;
        margin: 2rem 2rem;
    }

    .main{
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .main hr{
        width: 40rem;  
    }

    .main button{
        margin-bottom: 2rem;
        width: 20rem;
        height: 3rem;
        border: .1rem solid black;
        border-radius: 1.2rem;
        font-size: 1.5rem;
        background-color: black;
        color: white;
    }

    .main .publicaciones{
        color: white;
        width: 35rem;
        padding: 2rem 2rem;
        border-radius: 2rem;
        font-size: 1.5rem;
    }

</style>