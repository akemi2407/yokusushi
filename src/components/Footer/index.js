import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p className={ styles.phenomicReference } >
      <a href={ process.env.PHENOMIC_HOMEPAGE }>
        Website generated with { `<${ process.env.PHENOMIC_NAME} />` }
      </a>
      <a href="http://www.flaticon.com/packs/material-design">
        Icons by Google from flaticon.com under CC 3.0 BY licence
      </a>
    </p>  
  </footer>
)

export default Footer
