import React, { Component } from "react";
import styles from './Footer.module.css'

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.ptag}>Copyright © 2020 ACES, Association of Computer Engineering Students, University of Peradeniya. All rights reserved. </p>
        <div className={styles.flex_container}>
          <div className={styles.social_media}>
            <i className="fab fa-instagram" className={styles.itag}></i>
            <i className="fab fa-youtube" className={styles.itag}></i>
            <i className="fab fa-twitter" className={styles.itag}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
