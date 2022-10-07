import Image from 'next/image'

export const getStaticPaths = async () => {
            {productos.precio}  
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
            productos: data
        }
    }
}

const Details = ({productos}) => {
    return (
        <div>
            {productos.titulo}
            {productos.descripcion}
            {productos.precio}
            {productos.cantidad}  
            <Image layout='responsive' width={800} height={800} priority
            src={`http://localhost:1337${productos.imagen.url}`}/>
            
        </div>
        
    )
}

export default Details 