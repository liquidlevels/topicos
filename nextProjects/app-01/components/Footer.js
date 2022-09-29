import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.contenido}>
            <div className={styles.contenido__copyright}>

                <p>Todos los derechos reservados &copy; 2022</p>

            </div>

            <nav className={styles.contenido__navegacion}>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/blog'>Blog</Link>
            </nav>
        </div>

    </footer>

  )
}

export default Footer