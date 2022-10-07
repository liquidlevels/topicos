import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {

  const { titulo, descripcion, contenido, imagen, published_at, id } = entrada
  console.log(imagen)
  return (
    // <div className={styles.contenedor}>
    // </div>

    <div className={styles.post}>
      <Image className={styles.post__image} layout='responsive' width={128} height={128}
        src={`http://localhost:1337${imagen.url}`} />

      <h1 className={styles.post__titulo}>
        {titulo}
      </h1>

      {formatearFecha(published_at)}

      <p className={styles.post__descripcion}>
        {descripcion}
      </p>

      <Link href={`/blog/${id}`}>
        <a className={styles.post__enlace}>
          Leer entrada completa
        </a>
      </Link>
    </div>
  )
}

export default Entrada