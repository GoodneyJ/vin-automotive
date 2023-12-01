import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import VidCard from '../components/VidCard/VidCard'

import styles from './tutorials.module.css'
import globals from '../globals.css'


export default function page() {
  return (
    <div className={styles.TutorialsPageContainer}>
        <Navbar />
        <div className={styles.TutorialsContentContainer}>
          <div className={styles.TutorialsRowOne}>
            <VidCard title={'vid One'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
            <VidCard title={'vid Two'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
            <VidCard title={'vid Three'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
          </div>
          <div className={styles.TutorialsRowTwo}>
          <VidCard title={'vid One'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
            <VidCard title={'vid Two'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
            <VidCard title={'vid Three'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}/>
          </div>  
        </div>
    </div>
    )
  }