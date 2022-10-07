import Base from '../components/Base'
import EntradaTienda from '../components/EntradaTienda'

const tienda = ({entradas}) => {
  
    console.log(entradas)

    return (
    <Base tittle='Tienda'>
        <main className='{styles.contenedor}'>
            <div>
                {entradas.map(entradaTienda =>(
                    <EntradaTienda
                        key={entradaTienda.id}
                        entradaTienda={entradaTienda}
                    />
                )
                )}
            </div>
        </main>
    </Base>
  )
}

export async function getStaticProps(){
    const url = 'http://localhost:1337/tiendas'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    return{
        props:{
            entradas
        }
    }
}

export default tienda