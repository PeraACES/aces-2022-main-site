import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Body from '../components/Body/Body'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React from 'react'
//import Scroll from '../components/Body/Scroll'

export default function Home() {
    
    React.useEffect(() => {
        var loader = document.getElementById('preloader');
        window.addEventListener('load',function(){
            loader.style.display="none"
            
        })
    },[])
    return ( <div className = { styles.container } >
        <Head>
        <title>ACES</title>
        <meta name="description" content="aces" />
        <link rel="icon" href="/img/logo_1.png" />
        
        </Head>
        <div id="preloader">
            {/* <p>Loading...</p> */}
        </div>
        <NavBar page_no = {1} />
        <div className = "main-container" >
        <video src = "./video/Doctors.mp4"
        autoPlay = "true"
        loop = "true"
        muted = "true" />
        <h2 className = "main-heading" > Association of Computer Engineering Students </h2>  
        <p className = "main-subheading" > -University of Peradeniya - </p>  
        </div >  
        <Body />
      	{/*<Scroll />*/}
        <Footer />
        </div>
    )
    
    
}

