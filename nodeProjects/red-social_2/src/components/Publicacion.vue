<template>

<div class="container__post">

    <div class="user_icon">

        <img src="src/assets/benito.png" alt="">
        <button class="boton__follow"> Seguir </button>

    </div>

    <div class="main__content__publicacion">

        <p class="main__content__publicacion-post"> {{ publicacion }}</p>

    </div>

    <div class="user_name">

        <p>David Romero</p>

    </div>
</div>

</template>

<script>

    export default{
    props:{
        publicacion: String,
        },
    }

</script> 

<style scoped>

.container__post{
    border: 1px solid #fbfbfb;
    margin-bottom: 1rem;
    background-color: #446165;

}

.user_icon{
    background-color: #446165;
}
/* llamado para darle estilo a el icono del usuario */
.user_icon img{
    width: 3rem;
    height: 3rem;
    border-radius: 10rem;
    display: block;
    margin: auto;
    margin-top: 0.5rem;
    
}

/* contenedor principal abarca todos los divs */
.container__post{
    background-color: #446165;

}

.main__content__publicacion{
    background-color: #446165;
    padding: 1rem;
    margin: 0.5rem 0rem;
    border-radius: none;
    font-size: 16px;
    font-family:Georgia, 'Times New Roman', Times, serif;

}

.main__content__publicacion-post{
    color: white;
    font-size: 1.5rem;
    background-color: #446165;
}

.user_name{
    background-color: #446165;
    display: flex;
    margin: 0.5rem;
    font-size: 13px;
}

/* llamado a boton para darle estilo */
.user_icon button{
    background: #2a3d3f;
    border-radius: 1.5rem;
    margin-right: 0rem;
    margin-top: -50px;
    width: 70px;
    height: 10px;
    font-size: 13px;
}

/* llamado para darle estilo a username de la publicacion */
.user_name p{
    font-size: 1rem;
    color: white;
    background-color: #446165;
    
}

</style>