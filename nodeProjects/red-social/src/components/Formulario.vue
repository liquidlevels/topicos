<script setup>
    import SesionIniciada from './SesionIniciada.vue'
</script>
<template>

        <div class="main__login" v-if="completeLogin">
            <!-- <label for="username">Username</label> -->
            <input type="text" placeholder="username" v-model="nombre">
            <!-- <label for="password">Password</label> -->
            <input type="password" placeholder="password">
            <button @click="iniciarSesion">Login</button>
    </div>
    <div class="main__sesion__iniciada" v-if="sesionIniciada">
        <SesionIniciada />

    </div>

</template>

<script>
    export default {
        data(){
            return{
                nombre: '',
                sesionIniciada: false,
                completeLogin: true,
            }
        },

        components:{
            SesionIniciada,
        },

        methods:{
            iniciarSesion(){
                this.sesionIniciada = !this.sesionIniciada
                this.completeLogin = !this.completeLogin
                
            }
        }
    }
</script>

<style scoped>
    .main__login{
        padding: 4rem;
        border-radius: 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #191919;
    }

    .main__login input{
        border:0;
        background:none;
        display:block;
        margin: 1.5rem auto;
        text-align: center;
        border: .2rem solid #333;
        padding: 1rem 1rem;
        width: 20rem;
        outline: none;
        color: white;
        border-radius: 2.4rem;
    }

    .main__login button{
        margin-bottom: 2rem;
        width: 20rem;
        height: 3rem;
        border: .1rem solid black;
        border-radius: 1.2rem;
        font-size: 1.5rem;
        background-color: black;
        color: white;
    }

</style>