'use client'
import {React, useEffect, useState, useRef} from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {

  const [menuInteract, setMenuInteract] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const menuRef = useRef();

  const sidebarRef = useRef();

  function handleClick() {
    if(menuInteract && sidebarToggle) {
      menuRef.current.classList.add(`${styles.open}`)
      setMenuInteract(!menuInteract);
      setSidebarToggle(!sidebarToggle);
      sidebarRef.current.classList.add(`${styles.display}`);

    } else {
      menuRef.current.classList.remove(`${styles.open}`);
      setMenuInteract(!menuInteract);
      setSidebarToggle(!sidebarToggle);
      sidebarRef.current.classList.remove(`${styles.display}`);

    }

  }

  return (
      <div className={styles.navigationComponent}>
        <nav className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/">VIN</Link>
          </div>
          
          <div className={styles.fullMenu}>
            <Link href="/">Home</Link>
            <a>About</a>
            <Link href="/services">Service</Link>
            <a>Content</a>
          </div>

          <div id="menu-btn" className={styles.burgerContainer} ref={menuRef} onClick={handleClick}>
            <div id="menu-burger" className={styles.burger} onClick={handleClick}>
            </div>
          </div>
          

          
        </nav>

        <div className={styles.sidemenu} ref={sidebarRef}>
            <Link href="/">Home</Link>
            <a>About</a>
            <Link href="/services">Services</Link>
            <Link href="/tutorials">Content</Link>

            {/* <button onClick={handleClick}></button> */}
        </div>
    </div>
  )
}
