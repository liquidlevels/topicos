import db from '.../lib/firebase-admin'

export const getStaticPaths = async () => {
    const res = await fetch('https://consultorio-fit-84670-default-rtdb.firebaseio.com')
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
    const res = await fetch('https://consultorio-fit-84670-default-rtdb.firebaseio.com')
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
        <div></div>
        
    )
}

export default Details 