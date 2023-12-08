import React from 'react'

import Link from 'next/link';
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
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
                    <TiSocialTwitter id="twitter"/>
                    <FaFacebookF id="facebook"/>
                    <FaYoutube id="youtube"/>
                    <FaPhone id="phone"/>
                </div>
            </div>
            <div className={styles.quickLinks}>
                <Link href="/services">Services</Link>
                <Link href="/">About</Link>
                <Link href="/tutorials">Tutorials</Link>
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
        </div>
    </div>
  )
}
