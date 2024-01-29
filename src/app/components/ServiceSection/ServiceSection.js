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

            <p>We have passionate & knowledgeable technicians that are well versed in almost any aspect of auto repair! If your car doesn't need it, we won't do it!</p>

            <div className={styles.ServiceGallery}>
                <div className={styles.GalleryRowOne}>
                    <ServiceCard id={'CardOne'}  title={'Motorcycle service & repair'} description={"Whether it's basic maintenance or full on repair we love working on bikes!"}/>
                    <ServiceCard id={'CardTwo'} title={'Oil Change/Maintenance'} description={"if it'ss oil & filter changes, spark plug & ignition components, or even 100,000 mile timing services we only use quality and in spec fluids & components"} />
                    <ServiceCard id={'CardThree'} title={'Tire & Wheel work'} description={"If you've got a flat, or need balancing & rotatations we'll get you on the road riding smooth!"}/>
                </div>
                <div className={styles.GalleryRowTwo}>
                    {/* <ServiceCard id={'CardFour'} title={''}/> */}
                    <ServiceCard id={'CardFive'} title={'Diagnose & Repair'} description={"We have tried & tested procedures to accurately diagnose any issue you might have"}/>
                    <ServiceCard id={'CardSix'} title={'Welding & Exhaust work'} description={"Exhaust work can be intimidating, we know what to look for and how to keep that check engine off without breaking your bank"}/>
                </div>
            </div>


        </div>
        <div className={styles.ServiceCTAContainer}>
            <div className={styles.ServiceCTA}>
                <p>Don't See it here? Check out our full list of services!</p>
                <Link href='/services' className={styles.ctaBtn}>Services</Link>
            </div>
        </div>
    </div>
  )
}
