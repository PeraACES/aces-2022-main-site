import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>

       <Head>
        <title>Aces</title>
        <meta name="description" content="aces" />
        <link rel="icon" href="/img/logo.png" />
        
      </Head>

      <NavBar page_no="1"/>
      <div className="main-container">
      <video
        src="./video/Doctors.mp4"
        autoplay="true"
        loop="true"
        muted="true"
      />
      <h2 className="main-heading">Association of Computer Engineering Students</h2>
      <p className="main-subheading">- University of Peradeniya -</p>
    </div>
    <Footer/>
    </div>
  )
}
