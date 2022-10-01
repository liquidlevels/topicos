import Base from "../components/Base"
import Entrada from "../components/Entrada"

const blog = ({entradas}) => {
  console.log(entradas)

  return (
    <Base tittle='Blog'>
        <main className='{styles.contenedor}'>
          <div>
            {entradas.map(entrada =>(
              <Entrada
                key={entrada.id}
                entrada={entrada}
              />
            )
            )}
          </div>
        </main>
    </Base>
    
  )
}

export async function getStaticProps(){
	const url = 'http://localhost:1337/blogs'
	const respuesta = await fetch(url)
	const entradas = await respuesta.json()
	
	return{
		props:{
			entradas
		}
	}

}

export default blog