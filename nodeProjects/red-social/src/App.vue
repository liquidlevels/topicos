<script setup>
  import Tittle from './components/Tittle.vue'
  import Formulario from './components/Formulario.vue'
  import SesionIniciada from './components/SesionIniciada.vue'
</script>

<template>

  <div class="main">
    <div class="main__login__page" v-if="flag">
      <Tittle texto="ITE Connection"/>
      <Formulario />
    </div>

    <div class="main__onOff__button">
    <button @click="onOff">{{aparecer_desaparecer}}</button>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        flag: true,
        cambio: false,
        aparecer_desaparecer: 'Ocultar',  
      }
    },

    components:{
      Tittle,
      Formulario,
      SesionIniciada
    },

    methods:{
      onOff(){
        this.aparecer_desaparecer = 'Mostrar'

        this.flag = !this.flag

        if(this.flag != false){
          this.aparecer_desaparecer = 'Ocultar'
        }
      },

      // sesionIniciada(){
      //   if (this.flag == false){
      //     this.cambio = true
      //   }
      // }
    }

  }

</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  } 

  body{
    background-color:#3a5a40;
  }
  
  html{
    font-size: 62.5%;
    font-family:'Trebuchet MS';
  }

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
      margin-top: 20rem;
      padding: 4rem;
      margin-left: 50vh;
      margin-right: 50vh;
      border-radius: 2.4rem;
      background-color: #191919;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .main__onOff__button button{
    margin-bottom: 2rem;
        width: 10rem;
        height: 3rem;
        border: .1rem solid black;
        border-radius: 1.2rem;
        font-size: 1.5rem;
        background-color: black;
        color: white;
  }

  .main__login__page{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>