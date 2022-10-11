import Image from 'next/image'
// import styles from '../styles/Post.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/blogs')
    const data = await res.json()
    const paths = data.map(path =>{
        return {
            params:{
                id: path.id.toString()
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async  (context) => {
    const id = context.params.id
    const res = await fetch('http://localhost:1337/blogs/' + id)
    const data = await res.json()
    console.log(data.titulo)

    return {
        props:{
            post: data
        }
    }
}

const Details = ({post}) => {
    return (
        // <div className={styles.post}>
        //     <h1 className={styles.post__titulo}>
        //         {post.titulo}
        //     </h1>

        //     <p className={styles.post__descripcion}>
        //         {post.descripcion}
        //     </p>

        //     <p className={styles.post__contenido}>
        //         {post.contenido}  
        //     </p>

        //     <Image layout='responsive' width={800} height={800} priority
        //     src={`http://localhost:1337${post.imagen.url}`}/>
            
        // </div>

        <div >
            {post.titulo}
        </div>
        
    )
}

export default Details 