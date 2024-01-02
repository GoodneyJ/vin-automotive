'use client'
import React from 'react'
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer'

import styles from './VideoModal.module.scss'

export default function VideoModal(props) {
  return (
    <div className={styles.ModalContainer}>
        <div className={styles.CloseModal} onClick={() => props.handleClick()}>X</div>
        <YoutubePlayer className={styles.Video} videoId="S8lOqLKAQtQ" />
    </div>
  )
}
