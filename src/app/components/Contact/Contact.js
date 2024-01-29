import React from 'react'

import styles from './contact.module.css'

export default function Contact() {
  return (
    <div id="CONTACT" className={styles.contactContainer}>

        <h2>Book an appointment!</h2>
        <p>Any questions or concerns?</p>
        <p>You can message us here as well or call us!</p>
        <form>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="email" />
            <select id="cars" name="cars" placeholder="what kind of work do you need?">
                <option value="Maintenance">Maintenance</option>
                <option value="Diagnosis">Diagnosis</option>
                <option value="Repair">Replace / Repair</option>
                <option value="Paint & Body">Paint & Body</option>
            </select>
            <textarea></textarea>
        </form>
    </div>
  )
}
