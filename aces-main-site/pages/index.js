import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Body from '../components/Body/Body'
import styles from '../styles/Home.module.css'

export default function Home() {
    return ( < div className = { styles.container } >
        <NavBar page_no = "1" />
        <div className = "main-container" >
        <video src = "./video/Doctors.mp4"
        autoPlay = "true"
        loop = "true"
        muted = "true" />
        <h2 className = "main-heading" > Association of Computer Engineering Students </h2>  
        <p className = "main-subheading" > -University of Peradeniya - </p>  
        </div >  
        <Body />
        <Footer />
        </div>
    )
}