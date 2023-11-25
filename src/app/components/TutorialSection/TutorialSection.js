'use client'

import React, { useEffect } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';




// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './TutorialSection.module.css'

export default function TutorialSection() {
  
  return (
    <div className={styles.TutorialSectionContainer}>
      <div className={styles.CarouselWrapper}>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation = {{
        nextEl: styles.swiperBtnNext,
        prevEl: styles.swiperBtnPrev
      }}
      // pagination={{ clickable: true }}
      className={styles.SwiperContainer}
    >
          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}>Cost Care Health</h4>
            <p className={styles.SwiperText}>Lorem ipsum dolor, sit amet consectecusamus. Rerum.</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Send me a message!</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Send me a message!</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Send me a message!</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Send me a message!</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Send me a message!</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

      </Swiper>
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
