'use client'
import {react, useState} from 'react'


import Navbar from '../components/Navbar/Navbar'
import VidCard from '../components/VidCard/VidCard'
import Contact from '../components/Contact/Contact'

import styles from './tutorials.module.css'
import globals from '../globals.css'
import VideoModal from '../components/VideoModal/VideoModal'

export default function page() {

  const [showModal, setShowModal] = useState(false)

  function handleClick() {
    setShowModal(!showModal)
    console.log('fired')

  }

  return (
    <>
    <div className={styles.TutorialsPageContainer}>
        <Navbar />
        <div className={styles.TutorialsContentContainer}>
          <div className={styles.TutorialsRowOne}>
            <VidCard title={'vid One'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} handleClick={() => handleClick()}/>
            <VidCard title={'vid Two'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} handleClick={() => handleClick()} />
            <VidCard title={'vid Three'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} handleClick={() => handleClick()} />
          </div>
          <div className={styles.TutorialsRowTwo}>
            <VidCard title={'vid four'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} handleClick={() => handleClick()} />
            <VidCard title={'vid Tfive'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} handleClick={() => handleClick()} />
            <VidCard title={'vid six'} thumbnail={'photo'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'} handleClick={() => handleClick()} />
          </div>  
        </div>
    </div>
    <Contact />
    {showModal ? <VideoModal handleClick={() => handleClick()}/> : ''}
    </>
    )
  }