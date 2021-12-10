import React, { Component } from "react";
import styles from './Footer.module.css'

class Footer extends Component {
  render() {
    return (
      <div>
      <div className="text-center py-3 bg-white">
        <h4 className="text-primary m-2"><b>LET'S DISCUSS</b></h4>
        <div className="row">
          <div className="col-5 align-center"><div className={styles.linesLeft} ></div></div>
          <div className="col-2 "><i className="fas fa-inbox"></i></div>
          <div className="col-5 align-center"><div className={styles.linesRight} ></div></div>
        </div>
        <p>aces@eng.pdn.ac.lk</p>
      </div>
      <div className={styles.container}>
        <p className={styles.ptag}>Copyright © 2022 ACES, Association of Computer Engineering Students, University of Peradeniya. All rights reserved. </p>
        {/* <div className={styles.flex_container}>
          <div className={styles.social_media}>
            <i className="fab fa-instagram" className={styles.itag}></i>
            <i className="fab fa-youtube" className={styles.itag}></i>
            <i className="fab fa-twitter" className={styles.itag}></i>
          </div>
        </div> */}
      </div>
      </div>
    )
  }
}

export default Footer;
