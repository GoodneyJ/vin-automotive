'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import styles from './QuoteCarousel.module.css'

export default function QuoteCarousel() {

  

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.SwiperContainer}
    >
      <SwiperSlide className={styles.SwiperSlide}>
        <div className={styles.SlidePfp}></div>
        <div className={styles.SlideContent}>

        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>
        <div className={styles.SlidePfp}></div>
        <div className={styles.SlideContent}>
        <p>slide 1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>
        <div className={styles.SlidePfp}></div>
        <div className={styles.SlideContent}>
        <p>slide 2</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>
        <div className={styles.SlidePfp}></div>
        <div className={styles.SlideContent}>
            <p>slide 3</p>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}
