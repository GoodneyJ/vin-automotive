import React from 'react'
import Link from 'next/link';

import ServiceCard from '../ServiceCard/ServiceCard'

import styles from './ServiceSection.module.css'

export default function ServiceSection() {
  return (
    <div className={styles.ServiceWrapper}>
        <div className={styles.ServiceSectionContainer}>
            <h2>Need work done?</h2>

            <button>Book an appointment</button>

            <p>We have passionate & knowledgeable technicians that are well versed in almost any aspect of auto repair!</p>

            <div className={styles.ServiceGallery}>
                <div className={styles.GalleryRowOne}>
                    <ServiceCard id={'CardOne'}  title={'Motorcycle service & repair'}/>
                    <ServiceCard id={'CardTwo'} title={'Oil Change/Maintenance'}/>
                    <ServiceCard id={'CardThree'} title={'Tire & Wheel work'}/>
                </div>
                <div className={styles.GalleryRowTwo}>
                    <ServiceCard id={'CardFour'} title={''}/>
                    <ServiceCard id={'CardFive'} title={'Diagnose & Repair'}/>
                    <ServiceCard id={'CardSix'} title={'Welding & Exhaust work'}/>
                </div>
            </div>


        </div>
        <div className={styles.ServiceCTAContainer}>
            <div className={styles.ServiceCTA}>
                <p>Don't See it here? Check out our full list of services!</p>
                <Link href='/services'>Services</Link>
            </div>
        </div>
    </div>
  )
}
