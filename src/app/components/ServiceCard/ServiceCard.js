
'use client'
import React from 'react'

import styles from './ServiceCard.module.css'

export default function ServiceCard(props) {

{/* <CardContainer
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
 {isHovered && <HiddenInfo />}
</CardContainer> */}

  return (
    <div id={`${props.id}`} className={`bg ${styles.ServiceCardContainer}`}>
        <h4 className={styles.CardContent}>{props.title}</h4>
        <p className={styles.CardContent}>{props.description}</p>
        <button className={styles.CardContent}>Read more</button>

        <style jsx global>
          {`

            #CardOne, #CardTwo, #CardThree, #CardFour, #CardFive, #CardSix {
              background-size: cover;

            }

            #CardOne {
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('motobrak.jpeg');
              background-size: cover;

            }
            #CardTwo {
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('oil.jpeg');
              background-size: cover;
              background-position: center;

            }
            #CardThree {
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('oil.jpeg');
              background-size: cover;
            }
            #CardFour {
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('oil.jpeg');
              background-size: cover;
            }
            #CardFive {
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('tablet.jpeg');
              background-size: cover;
              background-position: center;
            }
            #CardSix {
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('weld.jpeg');
              background-size: cover;
              background-position: center;
            }

          `}
        </style>
    </div>
  )
}
