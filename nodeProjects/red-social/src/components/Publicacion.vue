<template>
    <div class="container">

        <div class="container__header">

            <img src="/assets/programmer_cat.jpg" alt="imagen"> <!-- imagen del icono de tu user -->
            <p>Emmanuel</p>
            <p>@liquid</p>

        </div>
        <div class="container__body">

            <p class="container__body-text">{{publicacion}}</p>

        </div>

        <div class="container__body-icons">
                <img src="/assets/comment.png" alt="comment">
                <img src="/assets/retweet.png" alt="retweet">
                <img src="/assets/like.png" alt="like">
                <img src="/assets/share.png" alt="share">
        </div>

    </div>
</template>

<script>
    export default{
        props:{
            publicacion:String,
        }
    }
</script>

<style scoped>
    .container{
        width: 80rem;
        border-radius: 2rem;
        margin-bottom: 2rem;
        background-color: #202020;
        padding: 2rem;
    }

    .container__header{
        width: block;
        background-color: #202020;
        border-radius: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:flex-start;
        padding: 1rem 0;
    }

    .container__header img{
        width: 5rem;
        height: 5rem;
        margin-right: 2rem;
        border-radius: 10rem;
    }
    .container__header p{
        font-size: 2rem;
        margin-right: 1.5rem;
        color: white;
    }

    .container__body{
        width: block;
        text-align: justify;
        background-color: #202020;
        padding: 2rem;
    }

    .container__body-text{
        word-wrap: break-word;
        margin-left: 5rem;
        background-color: #202020;
        text-align: justify;
        font-size: 2rem;
        margin-bottom: 2rem;

    }

    .container__body-icons{
        border-radius: 1.2rem;
        padding: 4rem;
        margin-left: 20rem;
        margin-right: 20rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
        padding: 1rem 0;
    }

    .container__body-icons img{
        width: 4rem;
        height: 4rem;
        padding: 1rem;
    }
</style>