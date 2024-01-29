'use client'

import {React, useRef} from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";




// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './TutorialSection.module.css'

export default function TutorialSection() {
  
  const swiperRef = useRef();

  return (
    <div className={styles.TutorialSectionContainer}>
      <div className={styles.TutorialSectionContent}>
        <Swiper
              cssMode={true}
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              // Navigation arrows
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}

              className={styles.RecentVideosContainer}
            >
              <SwiperSlide className={styles.VidCard}>
                <div className={styles.ThumbNail}></div>
                <h4>Slide One</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
              </SwiperSlide>

              <SwiperSlide className={styles.VidCard}>
                <div className={styles.ThumbNail}></div>
                <h4>Slide Two</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
              </SwiperSlide>

              <SwiperSlide className={styles.VidCard}>
                <div className={styles.ThumbNail}></div>
                <h4>Slide Three</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
              </SwiperSlide>

              <SwiperSlide className={styles.VidCard}>
                <div className={styles.ThumbNail}></div>
                <h4>Slide One</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
              </SwiperSlide>

              <SwiperSlide className={styles.VidCard}>
                <div className={styles.ThumbNail}></div>
                <h4>Slide Two</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
              </SwiperSlide>

              <SwiperSlide className={styles.VidCard}>
                <div className={styles.ThumbNail}></div>
                <h4>Slide Three</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> 
              </SwiperSlide>

          <FaChevronRight className={styles.NextArrow} onClick={() => swiperRef.current?.slideNext()}/>
          <FaChevronLeft className={styles.PrevArrow} onClick={() => swiperRef.current?.slidePrev()}/>
        </Swiper>
        <Link href="/tutorials" className={styles.TutorialCTA}>Learn more</Link>

      </div>


      <div className={styles.AffiliatesBar}>

      <div className={styles.Thanks}>
          <p>Thanks to our <span className={styles.PinkText}>friends</span>, <span className={styles.PinkText}>partners</span> & <span className={styles.PinkText}>affiliates!</span></p>
      </div>

      <div className={styles.Groups}>
        <p>affilliate 1</p>
        <p>affilliate 2</p>
        <p>affilliate 3</p>
        
      </div>

      </div>
    </div>
  )
}
