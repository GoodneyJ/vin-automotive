import React from 'react'

import styles from './ServiceCard.module.css'

export default function ServiceCard() {
  return (
    <div className={styles.ServiceCardContainer}>
        <h4 className={styles.CardContent}>Card Title</h4>
        <p className={styles.CardContent}>basic description</p>
        <button className={styles.CardContent}>Read more</button>
    </div>
  )
}
