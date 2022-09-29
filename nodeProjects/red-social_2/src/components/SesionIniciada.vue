<script setup>
    import Publicacion from './Publicacion.vue'
</script>  

<template>

    <div class="estilo">
        <h1 class="TituloSesionIni">Sesion Iniciada</h1><br>
        <textarea name="" id="" placeholder="En Que Piensas?" v-model="PublicacionUsuario"></textarea>
        <button @click="agregarPost">Publicar</button>
        <div class="publicaciones">
            <div v-for="publicacion in listaPublicaciones" :key="publicacion.key">   
                <Publicacion :publicacion="publicacion"/>
            </div>
        </div>
    </div>

</template>

<script>

    export default {

        data(){
            return{
                PublicacionUsuario: '',
                listaPublicaciones: [],
            }
        },

        methods: {
        agregarPost() {
            this.listaPublicaciones.unshift(this.PublicacionUsuario)
            this.PublicacionUsuario = ''
            
        }  
    },

        components: {
        Publicacion,
    } 
}
</script>

<style>
    
/* Estilo para la caja de tareas */
textarea{
    background: #354f52;
    color: white;
    font-size: 20px;
    padding: 30px;
    width: 100%;
    margin: 30px 0;
}

/* Estilo para lista de publicaciones */
/* p{
background-color: #354f52;
font-size: 1.5rem;
} */

/* Efecto en area de texto */
textarea:focus{
cursor: text;
color: #333333;
background-color: #446165;
color: white;
}

</style>