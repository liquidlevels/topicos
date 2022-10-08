import Image from 'next/image'

export const getStaticPaths = async () => {  
            const res = await fetch('http://localhost:1337/tiendas')
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
    const res = await fetch('http://localhost:1337/tiendas/' + id)
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
        <div>
            {post.titulo}
            {post.descripcion}
            {post.precio}
            {post.cantidad}  
            <Image layout='responsive' width={800} height={800} priority
            src={`http://localhost:1337${post.imagen.url}`}/>
            
        </div>
        
    )
}

export default Details 