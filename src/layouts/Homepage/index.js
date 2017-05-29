import React from "react"
import Page from "../Page"
import styles from "./index.css"
import Svg from "react-svg-inline"

import telephoneSvg from "../../icons/003-telephone-1.svg"
import emailSvg from "../../icons/010-gmail-logo.svg"


const Homepage = (props) => {
  return (
    <Page {...props}>
      <div className={styles.pageContent}>
        <h2>Japanese Restaurant</h2>

        <div> <Svg svg={ telephoneSvg } cleanup /> 
          020 xxx xxx xx 
        </div>
        <div> <Svg svg={ emailSvg } cleanup /> 
          blah@someemail.com 
        </div>

        <p className={styles.opening}> 
          <div>Mon: 12:00-15:00, 17:00-22:30</div>
          <div className={styles.highlight} >Tue: CLOSED</div>
          <div>Wed: 12:00-15:00, 17:00-22:30</div>
          <div>Thur: 12:00-15:00, 17:00-22:30</div>
          <div>Fri: 12:00-15:00, 17:00-23:00</div>
          <div>Sat: 12:00-15:00, 17:00-23:00</div>
          <div>Sun: 12:00-15:00, 17:00-22:30</div>
          <div></div>
         </p>

        <a target="_blank" href="https://www.google.co.uk/maps/place/Seaside+Rd,+Eastbourne+BN21+3PB/@50.7683115,0.2885179,17z/data=!3m1!4b1!4m5!3m4!1s0x47df73f14752f869:0x4480bc4e1a494d0f!8m2!3d50.768318!4d0.2907261?hl=en">
          <div><strong>42-44 Seaside Road</strong></div>
          <div>Eastbourne, East Sussex</div>
          <div><strong>BN21 3PB</strong></div>
        </a>
      </div>
    </Page>
  )

}

export default Homepage
