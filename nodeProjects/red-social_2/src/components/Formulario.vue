<script>
    import AppVue from '../App.vue';
    import TittleVue from './Tittle.vue';
</script>


<template>

<form>
    <div class="estilo">

    <input class="controls" type="text" placeholder="Ingrese Su Usuario" /> 

    <input class="controls" type="password" placeholder="Ingrese Su Contraseña"/>


</div>
</form>

</template>

<style>

/* Estilo de forma de formulario rectangular en los inpuds y de caja de texto */
.estilo{
    width: 400px;
    background-color: #354f52;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 16px;
    font-family: 'calibri';
    color: white;
    box-shadow: 7px 13px 37px #000;

} 

/* Pintar background de ambos titulos*/
h1{
    background-color: #354f52;
}

/* Estilo para cuadros de inpuds */
.controls{
    width: 100%;
    background: #354f52;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    border: 1px solid white;
    font-family: "calibri";
    font-size: 22px;
    color: white;
}

/* Tamaño de letras y margen al boton de sesion iniciada */
.TituloSesionIni{
    font-size: 2.8rem;
    margin-bottom: -35px;
}

</style>