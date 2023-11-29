'use client'

import React from 'react'

import styles from './VidCard.module.css'
export default function VidCard(props) {
  return (
    <div className={styles.VidCardContainer}>
      <div className={styles.Thumbnail}></div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}
