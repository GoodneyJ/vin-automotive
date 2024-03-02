'use client'
import {React, useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptcha } from '../../../ServerActions';

import styles from './contact.module.css'

export default function Contact() {


  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    jobType: '',
    jobDescription: ''
  });
  const recaptchaRef = useRef(null)
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
    .then(() => setIsVerified(true))
    .catch(() => setIsVerified(false))
  }

   const handleSubmit = async (e) => {
    e.preventDefault();



    const response = await fetch('../../api/send', {
      method: "POST",
      body: JSON.stringify({formData})
    });

    const data = await response.json();
  }

  return (
    <div id="CONTACT" className={styles.contactContainer}>

        <h2>Book an appointment!</h2>
        <p>Any questions or concerns?</p>
        <p>You can message us here as well or call us!</p>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name={formData.contactName}  onChange={(e) => formData.contactName = e.target.value}/>
            <input type="text" placeholder="email" name={formData.email} onChange={(e) => formData.email = e.target.value} />
            <select id="cars" name={formData.jobType} placeholder="what kind of work do you need?"  onChange={(e) => formData.jobType = e.target.value}>
                <option value="Maintenance">Maintenance</option>
                <option value="Diagnosis">Diagnosis</option>
                <option value="Repair">Replace / Repair</option>
                <option value="Paint & Body">Paint & Body</option>
            </select>
            <textarea  name={formData.jobDescription} onChange={(e) => formData.jobDescription = e.target.value}></textarea>
            <div className={styles.interfaceSpacer}>
              <button className={styles.submitBtn} type="submit" disabled={!isVerified}>Submit</button>
              <ReCAPTCHA 
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
                className={styles.recaptcha}
                theme='dark'

              />
            </div>
        </form>

    </div>
  )
}


