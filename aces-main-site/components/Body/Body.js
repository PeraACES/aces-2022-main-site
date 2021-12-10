import React, { Component } from 'react'
import styles from './Body.module.css'
import About from './About/About'
import Events from './Events/Events'

class Body extends Component {
    render() {
        return (
            <div className={styles.container}>
                <About />
                <Events />
            </div>
        )
    }
}

export default Body
