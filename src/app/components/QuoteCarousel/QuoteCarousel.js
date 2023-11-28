'use client'
import {React, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import styles from './QuoteCarousel.module.css'

export default function QuoteCarousel() {

  const swiperRef = useRef();

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      // Navigation arrows
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}

      className={styles.SwiperContainer}
    >
      <SwiperSlide>
        <div className={styles.SwiperSlide}>
          <div className={styles.SlidePfp}></div>
            <div className={styles.SlideContent}>
              <p>slide 1</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.SwiperSlide}>
          <div className={styles.SlidePfp}></div>
            <div className={styles.SlideContent}>
              <p>slide 2</p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.SwiperSlide}>
          <div className={styles.SlidePfp}></div>
            <div className={styles.SlideContent}>
              <p>slide 3</p>
            </div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.SwiperSlide}>
          <div className={styles.SlidePfp}></div>
            <div className={styles.SlideContent}>
              <p>slide 4</p>
            </div>
          </div>  
      </SwiperSlide>
      
      <FaChevronRight className={styles.NextArrow} onClick={() => swiperRef.current?.slideNext()}/>
      <FaChevronLeft className={styles.PrevArrow} onClick={() => swiperRef.current?.slidePrev()}/>
    </Swiper>
  )
}
