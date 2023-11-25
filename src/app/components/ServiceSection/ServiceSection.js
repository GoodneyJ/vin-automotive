import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

import styles from './ServiceSection.module.css'

export default function ServiceSection() {
  return (
    <div className={styles.ServiceSectionContainer}>
        <h2>Need work done?</h2>

        <button>Book an appointment</button>

        <p>We have passionate & knowledgeable technicians that are well versed in almost any aspect of auto repair!</p>

        <div className={styles.ServiceGallery}>
            <div className={styles.GalleryRowOne}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <div className={styles.GalleryRowTwo}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>

        <div className={styles.ServiceCTA}>
            <p>Don't See it here? Check out our full list of services!</p>
            <button>Services</button>
        </div>
    </div>
  )
}
