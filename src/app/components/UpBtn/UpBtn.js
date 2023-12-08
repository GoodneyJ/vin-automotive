import React from 'react'

import { FaChevronUp } from "react-icons/fa";
import Link from 'next/link'
import styles from './Upbtn.module.css'

export default function UpBtn() {


  return (
    <Link href="/">
        <div className={styles.UpBtnContainer}>
            <FaChevronUp />
        </div>
    </Link>
  )
}
