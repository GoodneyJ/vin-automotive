'use client'
import React from 'react'
import { IoIosClose } from "react-icons/io";
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer'

import styles from './VideoModal.module.scss'

export default function VideoModal(props) {
  return (
    <div className={styles.ModalContainer}>
      

        <IoIosClose className={styles.CloseModal}  onClick={() => props.handleClick()}/>
        <YoutubePlayer className={styles.Video} videoId="S8lOqLKAQtQ" />
    </div>
  )
}
