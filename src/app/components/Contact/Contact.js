'use client'
import {React, useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptcha } from '../../../ServerActions';
import { ToastContainer, toast } from 'react-toastify'


import 'react-toastify/dist/ReactToastify.css'
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

  const nameRef = useRef();
  const emailRef = useRef();
  const typeRef = useRef();
  const descRef = useRef();

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
    .then(() => setIsVerified(true))
    .catch(() => setIsVerified(false))
  }

  const noCaptcha = () =>
    
  toast.error('Fill the form & complete the captcha', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",

  })

  const formSuccess = () =>
  {  
    toast.success('Form Submitted!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

      formData.contactName=""
      formData.email=""
      formData.jobType=""
      formData.jobDescription=""

      nameRef.current.value = ''
      emailRef.current.value = ''
      typeRef.current.value = ''
      descRef.current.value = ''
  }

   const handleSubmit = async (e) => {
    e.preventDefault();



    if(isVerified) {
      const response = await fetch('../../api/send', {
        method: "POST",
        body: JSON.stringify({formData})
      });
  
      const data = await response.json();
      formSuccess();

    } else {
      noCaptcha();
    }


  }

  return (
    <div id="CONTACT" className={styles.contactContainer}>
            <ToastContainer

            />
        <h2>Book an appointment!</h2>
        <p>Any questions or concerns?</p>
        <p>You can message us here as well or call us!</p>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name={formData.contactName}  onChange={(e) => formData.contactName = e.target.value}ref={nameRef}/>
            <input type="text" placeholder="email" name={formData.email} onChange={(e) => formData.email = e.target.value} ref={emailRef}/>
            <select id="cars" name={formData.jobType} placeholder="what kind of work do you need?"  onChange={(e) => formData.jobType = e.target.value} ref={typeRef}>
                <option value="Maintenance">Maintenance</option>
                <option value="Diagnosis">Diagnosis</option>
                <option value="Repair">Replace / Repair</option>
                <option value="Paint & Body">Paint & Body</option>
            </select>
            <textarea  name={formData.jobDescription} onChange={(e) => formData.jobDescription = e.target.value} ref={descRef}></textarea>
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


