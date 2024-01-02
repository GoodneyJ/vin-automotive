'use client'

import {react, useState} from 'react'



import styles from './VidCard.module.css'
export default function VidCard(props) {

  const [showModal, setShowModal] = useState(false);




  return (
    <div className={styles.VidCardContainer} onClick={() => props.handleClick()}>
      <div className={styles.Thumbnail}></div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>

  )
}
