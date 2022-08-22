const vw = Vue.createApp( {
    data(){

        return {
            nombre: " ", //propiedad, tambien se pueden usar las ''
            edad: 0,
            validacionEdad: 'Validar Edad'
        };

        
    },

    computed:{
        validarEdad(){
            if(this.edad > 18){
                this.validacionEdad = 'Eres una persona adulta'
        } else{
            this.validacionEdad=  'Eres menor de edad'
        }
    }  
}
}).mount('#app');