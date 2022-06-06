import React, { Component } from 'react'
import styles from '../Body.module.css'
import Card from './Card'

class NewsLetter extends Component {
    render() {
        return (
            <div>
                <h4 className={styles.head}>NEWS LETTERS</h4>
                <div className="row p-1 mx-1 mx-md-5">
                    <div className='col-12 col-md-4'>
                        {/* <Card link="#" image="img/bg_1.jpg" desc="News Letter 1" /> */}
                    </div>
                    <div className='col-12 col-md-4'><Card link="https://viewer.joomag.com/aces-outline-the-newsletter-2019/0669634001576069380?short" image="img/bg_1.jpg" desc="News Letter 2019" /></div>
                    <div className='col-12 col-md-4'>
                        {/* <Card link="#" image="img/bg_1.jpg" desc="News Letter 3" /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsLetter
