import React from 'react'

import styles from './about.module.css'

export default function about() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.image}>Dummy image</div>
      <div className={styles.aboutContent}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus. Platea dictumst vestibulum rhoncus est pellentesque elit. Aliquam eleifend mi in nulla posuere sollicitudin. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p>
            <button className={styles.aboutBtn}>See More</button>
      </div>
    </div>
  )
}
