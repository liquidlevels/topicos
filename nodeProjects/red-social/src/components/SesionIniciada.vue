<script setup>
    import Publicacion from './Publicacion.vue'
</script>

<template>
    <div class="main">
        <!-- <h1>Has iniciado sesión</h1> -->
        <textarea name="" id="" placeholder="¿En que estas pensando?" v-model="publicacionUsuario"></textarea>
        <button @click="agregarPost">Post</button>
        <hr>
        <p>Inicio</p>
        <div class="main__publicaciones" v-for="publicacion in listaPublicaciones" :key="publicacion.key">
            <Publicacion :publicacion="publicacion" />
        </div>
        <hr>
        <button id="logout" @click="cerrarSesion">Logout</button>
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
            },
            cerrarSesion(){

            }
        }
    }
</script>

<style scoped>
    /* .main{
        width: 50rem;
        padding: 4rem;
        border-radius: 2.4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #191919;
        text-align: center;
    } */

    /* .main{
        padding: 2rem;
        margin: 50vh 50vh;
        border-radius: 1.2rem;
        background-color: #191919;
        display:flex;
        justify-content: center;
        flex-direction:column;
        align-items: center;
    } */

    .main{
        margin-top:.5rem;
        width: 70rem;
        background: none;
        /* background-color: blueviolet; */
        border-radius: 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .main h1{
        color:white;
        font-size: 2rem;
    }

    .main textarea{
        width: block;
        color: white;
        font-size: 2rem;
        background: none;
        outline: none;
        border: none;
        border-radius: .5rem;
        width: 50rem;
        height: 10rem;
        margin: 2rem 2rem;
    }

    .main hr{
        width: 70rem;  
        margin: 2rem;
    }

    p{
        color: white;
        font-size: 3rem;
        margin-bottom: 1rem;
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

    #logout{
        width: 10rem;
    }

    .main__publicaciones{
        color: white;
        font-size: 2rem;
        text-align: center;
    }

    /* .main .publicaciones{
        color: white;
        width: 35rem;
        padding: 2rem 2rem;
        border-radius: 2rem;
        font-size: 1.5rem;
    } */

</style>