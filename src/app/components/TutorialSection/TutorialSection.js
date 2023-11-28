'use client'

import React, { useEffect } from 'react'





// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './TutorialSection.module.css'

export default function TutorialSection() {
  
  return (
    <div className={styles.TutorialSectionContainer}>
      <div className={styles.TutorialSectionContent}>

        <div className={styles.RecentVideosContainer}>
          <div className={styles.VidCard}>
              <div className={styles.ThumbNail}></div>
              <h4>Card One</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className={styles.VidCard}>
              <div className={styles.ThumbNail}></div>
            <h4>Card One</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
          </div>
          <div className={styles.VidCard}>
              <div className={styles.ThumbNail}></div>
            <h4>Card One</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>          
          </div>
        </div>
        <button>Learn more</button>

      </div>


      <div className={styles.AffiliatesBar}>

      <div className={styles.Thanks}>
          <p>Thanks to our <span className={styles.PinkText}>friends</span>, <span className={styles.PinkText}>partners</span> & <span className={styles.PinkText}>affiliates!</span></p>
      </div>

      </div>
    </div>
  )
}
