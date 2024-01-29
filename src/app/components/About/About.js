import React from 'react'

import styles from './about.module.css'

export default function About() {
  return (
    <div id="ABOUT" className={styles.aboutContainer}>
      {/* <div className={styles.image}>Dummy image</div> */}
      <div className={styles.aboutContent}>
            <p>A group of like-minded individuals each with many years of experience in the automotive game looking to create something great from within the same garage. We each bring our own set of skills to the table to best serve the customer with honest, proper & reliable service</p>
            {/* <button className={styles.aboutBtn}>See More</button> */}
      </div>
    </div>
  )
}
