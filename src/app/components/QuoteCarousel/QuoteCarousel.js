import React from 'react'


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './TutorialSection.module.css'

export default function QuoteCarousel() {
  return (
    <div>
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
            <h4 className={styles.SwiperHeading}>Slide 0</h4>
            <p className={styles.SwiperText}>Lorem ipsum dolor, sit amet consectecusamus. Rerum.</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Slide 1</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Slide 2</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>

          <SwiperSlide className={styles.SwiperSlide}>
            <span className={styles.SwiperImg}></span>
            <h4 className={styles.SwiperHeading}> Slide 3</h4>
            <p className={styles.SwiperText}>I'll give you my best work, it'll help your business & mine!</p>
          </SwiperSlide>




      </Swiper>
    </div>
  )
}
