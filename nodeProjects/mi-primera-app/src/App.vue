<script setup>
    import Tittle from './components/Tittle.vue';
    import Results from './components/Results.vue';
</script>

<template>
    <div class="main">
        
        <input type="text" v-model="titulo" placeholder="Cualquier texto">
        <Tittle v-bind:texto="titulo"/>
        
        <div class="main__data" v-if="onOff">
            
            <label for="elemento_a">Elemento a: </label>
            <input type="number" v-model="elemento_a" placeholder="elemento a">
            <label for="elemento_b">Elemento b: </label>
            <input type="number" v-model="elemento_b" placeholder="elemento b">
            <Results v-bind:resultado="res"/>

            <button @click="sumar">Sumar</button>
            <button @click="restar">Restar</button>
            <button @click="equisde">???</button>
        </div>

        <img src="./images/programmer cat.jpg" alt="gatito">  
    </div>
</template>

<script>
    export default {
        data() {
            return{ 
                titulo: '',
                res: 0,
                elemento_a: 0,
                elemento_b: 0,
                onOff: false,
                validate: false,
            } 
        },

        methods: {
            // Metodos para cada uno de los tres botones
            sumar(){
                this.res = this.elemento_a + this.elemento_b
                return this.res
            },

            restar(){
                this.res = this.elemento_a - this.elemento_b
                return this.res

            },

            equisde(){
                this.res = 'uwu'
            }


        },

        watch: {
            titulo(value){

                if(value != ''){
                    this.onOff = true;

                } else if(value == ''){
                    this.onOff = false;

                }
                
            },

            validateInputIsntEmpty(input){
                if(input.elemento_a.value != '' && input.elemento_a.value != '' ){
                    this.validate = true
                    this.sumar
                } else{
                    this.validate = false
                    return 'Nope'
                }
            }
        },

        // watch: {
        //     validateInputIsntEmpty(input){
        //         if(input.elemento_a.value != '' && input.elemento_a.value != '' ){
        //             this.sumar
        //         } else{
        //             return 'Nope'
        //         }
        //     },
        // },

        components: {
            Tittle,
            Results,
        },
    };

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
        background-color: #202020;
        color: white;
    }

    .main{
        background-color: #202020;
        height: 100vh;
        display:flex-box;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center center;
        text-align: center;
        margin: 2rem;
        padding: 2rem;
    }

    .main img{
        width: 20rem;
        height: 20rem;
        border-radius: 2rem;
        margin-top: 2rem;
    }

    .main__data{
        /* height: 10vh; */
        background-color: #202020;
        display:flex-box;
        /* border: .2rem solid black; */
        flex-direction: column;
        justify-content: center;
        align-items: center center;
        align-content: center;
        text-align: center;
        margin: 2rem;
        padding: 2rem;
    }

    .main input{
        box-shadow: none;
        color: dark;
        background-color: coral;
        border-color: coral;
        margin: 1.2rem;
        padding: .5rem;
        border-radius: 1.5rem;
        justify-content: center;
        align-items: center;
     }

     .main__data label{
        font-size: 1.2rem;
     }

     .main__data input{
        box-shadow: none;
        color: dark;
        background-color: coral;
        border-color: coral;
        margin: 1.5rem;
        padding: .5rem;
        border-radius: 1.5rem;
        justify-content: center;
        align-items: center;
     }
     
     .main__data button{
        margin: 1.5rem;
        padding: .5rem;
        border-radius: 2rem 10rem;
        background-color: coral;
        border-color: coral;
        width: 20rem;
     }
    
</style>