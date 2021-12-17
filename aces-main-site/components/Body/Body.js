import React, { Component } from 'react'
import styles from './Body.module.css'
import About from './About/About'
import Events from './Events/Events'
import NewsLetter from './NewsLetter/NewsLetter'

class Body extends Component {
    render() {
        return (
            <div className={styles.container}>
                <About />
                <Events />
                <NewsLetter />
            </div>
        )
    }
}

export default Body
