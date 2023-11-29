import React from 'react'

import Navbar from '../Navbar/Navbar'

import styles from './hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>


        <p className={styles.pinkText}>Your experience is our passion.</p>
        <h1 className={styles.heroHeading}>We'll turn your car into the ride of your dreams</h1>
        <p className={styles.subtext}>A local shop and crew that will provide reliable service & care with you at their first thought</p>
        <button className={styles.heroBtn}>Learn More</button>
    </div>
  )
}
