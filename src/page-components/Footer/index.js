import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <div className={styles.right}>
      <p className={ styles.phenomicReference } >
        <a href={ process.env.PHENOMIC_HOMEPAGE }>
          Website generated with { `<${ process.env.PHENOMIC_NAME} />` }
        </a>
        <a href="http://www.flaticon.com/packs/material-design">
          Icons by Google from flaticon.com
        </a>
      </p>  
    </div>
  </footer>
)

export default Footer
