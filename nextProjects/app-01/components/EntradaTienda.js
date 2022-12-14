import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../helpers'
import styles from '../styles/EntradaTienda.module.css'

const EntradaTienda = ( {entradaTienda} ) => {
  
  const {titulo, descripcion, published_at, precio, id, cantidad, imagen} = entradaTienda
    
  console.log(imagen)

  return (
    <div className={styles.producto}>
        <Image className={styles.producto__imagen} layout='responsive'width={800} height={800}
        src={`http://localhost:1337${imagen.url}`} />

        <h1 className={styles.producto__titulo}>
            {titulo}
        </h1>
        
        {formatearFecha(published_at)}
        
        <p className={styles.producto__descripcion}>
            {descripcion}
        </p>

        <h3>
            Precio {precio}
        </h3>

        <h3>
            Cantidad {cantidad}
        </h3>        

        <Link href={`/tienda/${id}`}>
            <a className={styles.producto__enlace}>
                Comprar
            </a>
        </Link>
    </div>
  )
}

export default EntradaTienda