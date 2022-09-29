import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Cabecera.module.css'

const Cabecera = () => {
  return (
    <header className={styles.header}>
        <div className={styles.contenido}>
            <div className={styles.contenido__logo}>

                <Link href={'/'}>
                    <a>
                    <Image width={200} height={200} src='/img/programmer_cat.jpg'/>
                    </a>
                </Link>

            </div>

            <nav className={styles.contenido__navegacion}>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/blog'>Blog</Link>
            </nav>
        </div>

    </header>

  )
}

export default Cabecera