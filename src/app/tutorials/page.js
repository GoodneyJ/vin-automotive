import React from 'react'

import styles from './tutorials.module.css'
import globals from '../globals.css'
import VidCard from '../components/VidCard/VidCard'

export default function page() {
  return (
    <div className={styles.TutorialsPageContainer}>
        <div className={styles.TutorialsContentContainer}>
          <div className={styles.TutorialsRowOne}>
            <VidCard title={'vid one'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
          </div>
          <div className={styles.TutorialsRowTwo}>

          </div>  
        </div>
    </div>
    )
  }