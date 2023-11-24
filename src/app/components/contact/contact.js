import React from 'react'

import styles from './contact.module.css'

export default function contact() {
  return (
    <div className={styles.contactContainer}>

        <h2>Book an appointment!</h2>
        <p>Any quetsions or concerns?</p>
        <p>You can message us here as well or call us!</p>
        <form>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="email" />
            <select id="cars" name="cars" placeholder="what kind of work do you need?">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <textarea></textarea>
        </form>
    </div>
  )
}
