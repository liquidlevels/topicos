<template>
    <div class="main">

        <div class="main__tittle">
            <h1>{{titulo}}</h1>
        </div>

        <div class="main__data">
            <h2>Inserta los datos</h2>
            <input type="text" v-model="nombre" placeholder="Nombre del usuario">
            <input type="text" v-model="edad" placeholder="Edad del usuario">
            <p>Nombre: {{nombre}}</p>
            <p>Edad: {{edad}}</p>
        </div>

        <div class="main__results">
            <p>{{validarEdad}}</p>
        </div>

    </div>
</template>

<script>
import { toHandlers } from 'vue'

    export default {
        data(){
            return {
                nombre: '',
                edad: '',
                validacionEdad: '',
                titulo: 'Evaluacion de Edad',   
            }
        },

        computed: {
            validarEdad(){
                if(this.edad > 18){
                    this.validacionEdad = 'Eres un adulto'
                    
                } else{
                    this.validacionEdad = 'Eres menor de edad'
                }
                
                return this.validacionEdad
            }
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 2rem;
        background-color: #333;
    }

    .main{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 2rem;
    }

    .main__tittle{
        font: 3rem;
        background-color: #ef476f;
        text-align: center;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        border-radius: 2rem;
    }

    .main__data{
        font-size: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        background-color: #ef476f;
        border-radius: 3rem;
        margin-top: 2rem;
        margin-right: 40rem;
        margin-left: 40rem;
    }

    .main__data input{
        height: 2.5rem;
        width: 20rem;
        border-radius: 1.2rem;
        border: none;
        border-color: #ef476f;
        margin: 1rem;
        padding-left: 1.5rem;
    }

    .main__data button{
        border-radius: 1.5rem;
        height: 2.5rem;
        border: none;
        border-color: #ef476f;
        margin: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .main__data label{
        font-size: 2rem;
    }

    .main__data p{
        font-size: 2rem;
        margin: 0.2rem;

    }

    .main__data h2{
        font-size: 2rem;
        margin-top: 2rem;
    }

    .main__results{
        background-color: #ef476f;
        margin: 2rem;
        margin-left: 40rem;
        margin-right: 40rem;
        border-radius: 3rem;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
  

</style>
