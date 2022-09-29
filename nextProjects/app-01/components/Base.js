import Head from 'next/head'
import Cabecera from './Cabecera'
import Footer from './Footer'

const Base = ({children}) => {
  return (
    <div>
        <Head>
            <title>Home</title>

            <meta name='description' content='Es una pagina de blog'/>
        </Head>

        <Cabecera/>
        {children}
        <Footer/>
    </div>
  )
}

export default Base

