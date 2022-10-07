import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../helpers'
import styles from '../styles/EntradaTienda.module.css'

const EntradaTienda = ( {entradaTienda} ) => {
  
  const {titulo, descripcion, published_at, precio, cantidad, imagen} = entradaTienda
    
  console.log(imagen)

  return (
    <div className={styles.producto}>
        <Image className={styles.producto__imagen} layout='responsive'width={800} height={800}
        src={`http://localhost:1337${imagen.url}`}/>

        <h1 className={styles.producto__titulo}>
            {titulo}
        </h1>
        
        {formatearFecha(published_at)}
        
        <p className={styles.producto__descripcion}>
            {descripcion}
        </p>

        {precio}
        {cantidad}

        <Link href={`/tienda/${id}`}>
            <a className={styles.producto__enlace}>
                Ver entrada completa
            </a>
        </Link>
    </div>
  )
}

export default EntradaTienda