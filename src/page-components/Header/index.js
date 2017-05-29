import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../../icons/011-twitter-logo-on-black-background.svg"
import facebookSvg from "../../icons/014-facebook-logo.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (

  <header className={ styles.header }>
    <div className={ styles.sns }>
      {
        pkg.twitter &&
        <Link to={ pkg.twitter } className={ styles.link }>
          <Svg svg={ twitterSvg } cleanup />
          Twitter
        </Link>
      }
      {
        pkg.facebook &&
        <Link to={ pkg.facebook } className={ styles.link }>
          <Svg svg={ facebookSvg } cleanup />
          Facebook
        </Link>
      }
    </div>
  </header>
)

Header.propTypes = {
  head: PropTypes.object.isRequired,
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
