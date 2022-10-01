import Image from 'next/image'
import { formatearFecha } from '../helpers'
import blog from '../pages/blog'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {

    const {titulo, descripcion, contenido, imagen, published_at, id} = entrada
    console.log(imagen)
    return (
      // <div className={styles.contenedor}>
      // </div>
      
      <div className={styles.post}>
        <Image layout='responsive' width={800} height={800}
          src={`http://localhost:1337${imagen.url}`}/>

          <h1 className={styles.post__titulo}>
            {titulo}
          </h1>
            {formatearFecha(published_at)}
          <p className={styles.post__descripcion}>
            {descripcion}
          </p>
        </div>
  )
}

export default Entrada