'use client'
import {React, useState} from 'react'
import { EmailTemplate } from '../EmailTemplate/EmailTemplate';
import { Resend } from 'resend';
import styles from './contact.module.css'

export default function Contact() {

  const [contactName, setContactName] = useState("")
  const [email, setEmail] = useState("")
  const [jobType, setJobType] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    jobType: '',
    jobDescription: ''
  });

   const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await fetch('../../api/send', {
        method: "POST",

        body: JSON.stringify({formData})
      });

    const data = await response.json();
    
  }

  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="CONTACT" className={styles.contactContainer}>

        <h2>Book an appointment!</h2>
        <p>Any questions or concerns?</p>
        <p>You can message us here as well or call us!</p>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name={contactName}  onChange={(e) => formData.contactName = e.target.value}/>
            <input type="text" placeholder="email" onChange={(e) => formData.email = e.target.value} />
            <select id="cars" name="cars" placeholder="what kind of work do you need?"  onChange={(e) => formData.jobType = e.target.value}>
                <option value="Maintenance">Maintenance</option>
                <option value="Diagnosis">Diagnosis</option>
                <option value="Repair">Replace / Repair</option>
                <option value="Paint & Body">Paint & Body</option>
            </select>
            <textarea  onChange={(e) => formData.jobDescription = e.target.value}></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}


