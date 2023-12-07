'use client'
import {React, useRef, useEffect} from 'react'
import Image from 'next/image'

import styles from './DisplayContent.module.css'

export default function DisplayContent(props) {
  return (
    <div className={styles.DisplayContainer} ref={props.passThru}>
        <div id="ColLeft" className={styles.DisplayColumn}>
            <h2 className={styles.DisplayTitle}>{props.title}</h2>
            <p className={styles.Description}>{props.content}</p>
            <p> Need your car title? <button>Book Appointment</button></p>
        </div>
        <div id="ColRight" className={styles.DisplayColumn}>
            <Image className={styles.img} width={250} height={250} src={props.img} alt="yomama"/>
        </div>
  </div>
  )
}
