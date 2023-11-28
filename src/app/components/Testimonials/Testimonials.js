import React from 'react'
import QuoteCarousel from '../QuoteCarousel/QuoteCarousel'

import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <div className={styles.TestimonialsContainer}>
      <h3>Not Convinced?</h3>
      <p> Check out a few words from our clients</p>
      <QuoteCarousel />
    </div>
  )
}
