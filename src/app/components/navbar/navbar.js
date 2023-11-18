import React from 'react'

import styles from './navbar.module.css'

export default function navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <a>VIN</a>
      </div>
      
      <div className={styles.fullMenu}>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Content</a>
      </div>

      <div className={styles.burgerContainer}>
        <div className={styles.burger}></div>
      </div>
      
      <div className={styles.sidemenu}>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Content</a>

        <button>X</button>
      </div>
      
    </nav>
  )
}
