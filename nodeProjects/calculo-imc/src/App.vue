<template>
  <div class="main">
    
    <div class="main__tittle">
      <p>{{tittle}}</p>
    </div>

    <div class="main__data">
      <label for="">Peso: </label>
      <input type="text" v-model="peso" placeholder="Peso en kg">
      <label for="">Altura: </label>
      <input type="text" v-model="altura" placeholder="Altura en cm">
    </div>

    <div class="main__results">
      <p>Tu IMC es: {{calcularIMC}}</p>
      <p>{{validarIMC}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        peso: '',
        altura: '',
        altura_cm: 0,
        cm: 100,
        imc: 0,
        tittle: 'Calculo del IMC'
      }
    },

    computed: {
      calcularIMC(){
        this.altura_cm = this.altura / this.cm;
        this.imc = this.peso / ( this.altura_cm * this.altura_cm )

        return this.imc
      },

      validarIMC(){
        if( this.imc < 18.5 ){
          return 'Delgado'
        }
        else if( this.imc > 18.5 && this.imc < 25 ){
          return 'Normal'
        }
        else if( this.imc > 25 ){
          return 'Sobrepeso'
        }

      }
    }
  }

</script>

<style>
  *{
    margin: 0;
    padding: 0;
    background-color: #cdb4db;
  }

  html{
    font-size: 62.5%;
  }

  .main{
    margin: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main__tittle{
    background-color: #ffafcc;
    width: 30rem;
    margin: 1rem;
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }

  .main__tittle p{
    background-color: #ffafcc;
    color: black;
  }

  .main__data{
    margin: 2rem;
    padding: 2rem;
    display:flexbox;
    border-radius: 1.5rem;
    background-color: #ffafcc;
  }

  .main__data label{
    background-color: #ffafcc;
    margin-left: 2rem;
    font-size: 1.5rem;
  }

  .main__data input{
    border-radius: 2rem;
    margin-left: 1rem;
  }

  .main__results{
    background-color: #ffafcc;
    padding: 1.5rem;
    margin: 1.5rem;
    width: 30rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
  }

  .main__results p{
    background-color: #ffafcc;
    justify-content: center;
    align-items: center;
  }
</style>