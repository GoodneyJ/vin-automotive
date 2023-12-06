'use client'
import {React, useRef, useEffect} from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'

import styles from './services.module.css'
export default function Page() {

  const CycleBtn = useRef();
  const VehMaint = useRef();
  const TirMaint = useRef();
  const ACHeat = useRef();
  const BrakeSus = useRef();
  const VehDiag = useRef();
  const BdyPnt = useRef();
  const WldOthr = useRef();

  const arr = [CycleBtn, VehMaint, TirMaint, ACHeat, BrakeSus, VehDiag, BdyPnt, WldOthr]
  function handleClick(e) {

    for(let i = 0; i < arr.length; i++) {
      if(e.target == arr[i].current) {
        arr[i].current.classList.add('active')
      } else {
        arr[i].current.classList.remove('active')
      }
    }
  }

  return (
    <div className={styles.ServicesPageContainer}>
      <Navbar />

      <h2>THIS IS WHAT WE LIVE FOR</h2>

      <div className={styles.InterfaceContainer}>
        <div id="RowOne" className={styles.InterfaceRow}>
          <div id="1" className={`${styles.InterfaceBtn}`} ref={CycleBtn} onClick={handleClick}>Motorcycle Service</div>
          <div id="2" className={styles.InterfaceBtn} ref={VehMaint} onClick={handleClick}>Vehicle Maintenance Work</div>
          <div id="3" className={styles.InterfaceBtn} ref={TirMaint} onClick={handleClick}>Tire Maintenance</div>
          <div id="4" className={styles.InterfaceBtn} ref={ACHeat} onClick={handleClick}>A/C & Heating</div>
        </div>
        <div id="RowTwo"className={styles.InterfaceRow}>
          <div id="5" className={styles.InterfaceBtn} ref={BrakeSus} onClick={handleClick}>Brake & Suspension Service</div>
          <div id="6" className={styles.InterfaceBtn} ref={VehDiag} onClick={handleClick}>Vehicle Diagnostic</div>
          <div id="7" className={styles.InterfaceBtn} ref={BdyPnt} onClick={handleClick}>Body & Paint</div>
          <div id="8" className={styles.InterfaceBtn} ref={WldOthr} onClick={handleClick}>Welding & Other Specialties</div>
        </div>


      </div>
      {/* Need to convert DisplayContainer into a component, and apply the same technique seen in handleClick */}
      <div className={styles.DisplayContainer}>
          <div id="ColLeft" className={styles.DisplayColumn}>
            <h2>OUR DIAGNOSTIC PROCEDURE</h2>

            <p className={styles.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p> Need your car title? <button>Book Appointment</button></p>
          </div>
          <div id="ColRight" className={styles.DisplayColumn}>
            <Image className={styles.img} width={250} height={250} src='/pngegg.png'/>
          </div>
        </div>
        <style jsx>
          {`
            .active {
              background-color: #9B347C;
              border: 1.5px solid #d9d9d9 !important;
            }
          `}
        </style>
    </div>
  )
}
