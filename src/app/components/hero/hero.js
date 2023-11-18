import React from 'react'

import Navbar from '../navbar/navbar'

import styles from './hero.module.css'

export default function hero() {
  return (
    <div className={styles.heroContainer}>
        <Navbar />

        <p className={styles.pinkText}>Your experience is our passion.</p>
        <h1 className={styles.heroHeading}>We'll turn your car into the ride of your dreams</h1>
        <p className={styles.subtext}>A local shop and crew that will provide reliable service & care with you at their first thought</p>
        <button className={styles.heroBtn}>Learn More</button>
    </div>
  )
}
