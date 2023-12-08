import React from 'react'


import Link from 'next/link'


import styles from './hero.module.css'

export default function Hero() {
  return (
    <div id="HERO" className={styles.heroContainer}>


        <p className={styles.pinkText}>Your experience is our passion.</p>
        <h1 className={styles.heroHeading}>We'll turn your car into the ride of your dreams</h1>
        <p className={styles.subtext}>A local shop and crew that will provide reliable service & care with you at their first thought</p>
        <Link href="#CONTACT" className={styles.heroBtn}>Learn More</Link>
    </div>
  )
}
