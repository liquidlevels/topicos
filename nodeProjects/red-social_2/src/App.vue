<script setup>
  import Tittle from './components/Tittle.vue'
  import Formulario from './components/Formulario.vue'
  import SesionIniciada from './components/SesionIniciada.vue'
  </script>
  
  <template>
    <div v-if="flag">

      <Tittle texto="BIRCOD"/>
      <Formulario/>
    </div>
    
    <div v-if="flag2">
        <SesionIniciada/>
  </div>
    <button class="botonE" @click="onOff">Entrar/Salir</button>

  </template>
  
  <script>
  
    export default {
      data(){
        return{
        flag: true,  
        flag2: false
        }
  
      }, 

      methods: {
      onOff(){
        this.flag = !this.flag
        this.flag2 = !this.flag2   


        }
      },
  
      components: {
      Tittle,
      Formulario,
      SesionIniciada,
    }
  }
  </script>
  
  
  <style>

/* Estilo predeterminado a html */
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #cad2c5;

  }

/* Tamaño de texto predeterminado   */
  .html{
    font-size: 62.5%

  }

/* Estilo para el titulo de red social */
.titulo{
  width: 400px;
    background-color: #354f52;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 50px;
    font-family: 'calibri';
    color: white;
    box-shadow: 7px 13px 37px #000;
    text-align: center;
    font-size: 2rem;
  }

/* Estilo a todos los botones */
button{
  background: #354f52;
  border-radius: 16px;
  display: block;
  margin: auto;
  margin-top: -25px;
  color: white;
  font-size: 16px;
  padding: 20px;
  border: none;
  

}
/* Ancho exacto para boton de entrada y salida */
.botonE{
  width: 400px;
  
}

  </style> 