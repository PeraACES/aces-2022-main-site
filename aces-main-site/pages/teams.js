import React, { Component } from "react";

import styles from '../styles/Teams.module.css';
//import Scroll from '../components/Body/Scroll'
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

class TeamsPage extends Component {
    render() { 
        return( 
        <div className={styles.bg}> 
            
            <Navbar page_no = {4}/>
            <div className="container mt-5 mb-5">

                <h3 className="text-primary text-center">EXECUTIVE COMMITTE 2021/2022</h3>

                <hr className="bg-primary"></hr>

                <div className="row" style={{marginLeft:'2%'}}>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Randika.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>President<br/>
                                <b>Randika Viraj</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Isuru.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Advisor/Senior Treasurer<br/>
                                <b>Dr. Isuru Nawinne</b></small>
                                </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Thushara.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Vice President<br/>
                                <b>Thushara Weerasundara</b></small>
                            </div>
                        </div>

                        
                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Imesh.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Secretary<br/>
                                <b>Imesh Balasooriya</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Ridma.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Assistant Secretary<br/>
                                <b>Ridma jayasundara</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Nanduni.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Editor<br/>
                                <b>Nanduni Gamage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Isara.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Junior Editor<br/>
                                <b>Isara Thilakaratne</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Nadeesha.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Junior Treasurer<br/>
                                <b>Nadeesha Diwakara</b></small>
                            </div>
                        </div>              




                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Heshan.jpeg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Heshan Dissanayake</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Kavindu.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Kavindu Hewamanage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Deshan.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Deshan Liyanaarachchi</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Pubudu.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Pubudu Bandara</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Adithya.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Adithya Gallage</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>    
                                <img src="/img/comittee/Ishta.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Ishta Jayakody</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Roshila.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Roshila Sewwandi</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/Ruchira.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Member<br/>
                                <b>Ruchira Tharaka</b></small>
                            </div>
                        </div>

                </div>

            </div>
	    {/*<Scroll />*/}
            <Footer />
        </div>);
    }
}
 
export default TeamsPage;