import React from 'react'


import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
            <div className={styles.contactInfo}>
                <h4>Where you can find us:</h4>
                <p>9946 Washington Blvd N, Laurel, MD</p>
                <p>240 123 4567</p>
                <p>vincustomerservice@vinautomotive.com</p>
                <h4>Socials:</h4>
                <div className={styles.socialsContainer}>
                    <div className={styles.socialItem}></div>
                    <div className={styles.socialItem}></div>
                    <div className={styles.socialItem}></div>
                    <div className={styles.socialItem}></div>
                </div>
            </div>
            <div className={styles.quickLinks}>
                <a>Services</a>
                <a>About</a>
                <a>Tutorials</a>
            </div>
            
            <div className={styles.affiliateLinks}>
                <h4>Affiliate Links</h4>
                <a>www.affiliate1.net</a>
                <a>www.affiliate2.com</a>
                <a>www.affiliate3.org</a>
            </div>
        </div>

        <div className={styles.bottomRow}>
            <p>Designed & Developed by <span>JGWebDevelopment</span></p>

            <button className={styles.backToTop}>
                ^
            </button>
        </div>
    </div>
  )
}
