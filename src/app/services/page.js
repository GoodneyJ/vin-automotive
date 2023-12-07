'use client'
import {React, useRef, useEffect, useState} from 'react'

import Navbar from '../components/Navbar/Navbar'
import DisplayContent from '../components/DisplayContent/DisplayContent'
import styles from './services.module.css'

export default function Page() {

  const [toggle, setToggle] = useState(false)

  const CycleBtn = useRef();
  const BrakeSus = useRef();
  const VehMaint = useRef();
  const VehDiag = useRef();
  const TirMaint = useRef();
  const BdyPnt = useRef();
  const ACHeat = useRef();
  const WldOthr = useRef();

  const CycleContent = useRef();
  const BrakeSusContent = useRef();
  const VehMaintContent = useRef();
  const VehDiagContent = useRef();
  const TirMaintContent = useRef();
  const BdyPntContent = useRef();
  const ACHeatContent = useRef();
  const WldContent = useRef();



  const btnArr = [CycleBtn, VehMaint, TirMaint, ACHeat, BrakeSus, VehDiag, BdyPnt, WldOthr]


  const disArr = [CycleContent, BrakeSusContent, VehMaintContent, VehDiagContent, TirMaintContent, BdyPntContent, ACHeatContent, WldContent]

  function handleClick(e) {

    for(let j = 0; j < disArr.length; j++) {
      if(disArr[j].current ) {
        disArr[j].current.style.opacity = 0;
      }
    }
    

    for(let i = 0; i < btnArr.length; i++) {
      if(e.target == btnArr[i].current) {
        btnArr[i].current.classList.add('active')
        switch(e.target.id) {
          case 'CycleBtn':
            CycleContent.current.style.opacity = 1;
            break;
          case 'BrakeSus':
            BrakeSusContent.current.style.opacity = 1;
            break;
          case 'VehMaint':
            VehMaintContent.current.style.opacity = 1;
            break;
          case 'VehDiag':
            VehDiagContent.current.style.opacity = 1;
            break;
          case 'TirMaint':
            TirMaintContent.current.style.opacity = 1;
            break;
          case 'BdyPnt':
            BdyPntContent.current.style.opacity = 1;
            break;
          case 'ACHeat':
            ACHeatContent.current.style.opacity = 1;
            break;
          case 'WldOthr':
            WldContent.current.style.opacity = 1;
            break;
          default:
            console.log('bruh')
            break;
        }
      } else {
        btnArr[i].current.classList.remove('active')
      }
    }
  }

  return (
    <div className={styles.ServicesPageContainer}>
      <Navbar />

      <h2>THIS IS WHAT WE LIVE FOR</h2>

      <div className={styles.InterfaceContainer}>
        <div id="RowOne" className={styles.InterfaceRow}>
          <div id="CycleBtn" className={`${styles.InterfaceBtn}`} ref={CycleBtn} onClick={handleClick}>Motorcycle Service</div>
          <div id="VehMaint" className={styles.InterfaceBtn} ref={VehMaint} onClick={handleClick}>Vehicle Maintenance Work</div>
          <div id="TirMaint" className={styles.InterfaceBtn} ref={TirMaint} onClick={handleClick}>Tire Maintenance</div>
          <div id="ACHeat" className={styles.InterfaceBtn} ref={ACHeat} onClick={handleClick}>A/C & Heating</div>
        </div>
        <div id="RowTwo"className={styles.InterfaceRow}>
          <div id="BrakeSus" className={styles.InterfaceBtn} ref={BrakeSus} onClick={handleClick}>Brake & Suspension Service</div>
          <div id="VehDiag" className={styles.InterfaceBtn} ref={VehDiag} onClick={handleClick}>Vehicle Diagnostic</div>
          <div id="BdyPnt" className={styles.InterfaceBtn} ref={BdyPnt} onClick={handleClick}>Body & Paint</div>
          <div id="WldOthr" className={styles.InterfaceBtn} ref={WldOthr} onClick={handleClick}>Welding & Other Specialties</div>
        </div>

      </div>
      {/* Need to convert DisplayContainer into a component, and apply the same technique seen in handleClick */}

        <DisplayContent
          title="Motorcycle Service & Repair"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={CycleContent}
        />

        <DisplayContent
            title="Brake & Suspension"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            img="/pngegg.png"
            passThru={BrakeSusContent}
        />

        <DisplayContent
          title="Maintenance & Care"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={VehMaintContent}
        />

        <DisplayContent
          title="Our Diagnostic Procedure"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={VehDiagContent}
        />

        <DisplayContent
          title="Tire Care & Maintenance"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={TirMaintContent}
        />
        
        <DisplayContent
          title="Body & Paint"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={BdyPntContent}
        />

        <DisplayContent
          title="A/C & Heating"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={ACHeatContent}
        /> 

        <DisplayContent
          title="Welding & Other Services"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          img="/pngegg.png"
          passThru={WldOthr}
        />               
        <style jsx>
          {`
            .active {
              background-color: #9B347C;
              border: 1.5px solid #d9d9d9 !important;
            }

            .activeCard {
              opacity: 1 !important;

            }
          `}
        </style>
    </div>
  )
}
