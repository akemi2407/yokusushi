import React from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Nav = ({url}) => (
  <nav className={ styles.nav }>
    {NavLink("HOME", "/", url)}
    {NavLink("ABOUT", "/about", url)}
    {NavLink("MENU", "/menu", url)}
    {NavLink("GALLERY", "/gallery", url)}
    {NavLink("CONTACT", "/contact", url)}
  </nav>
)

const NavLink = (text, redirect, currentLocation) => {
  currentLocation = currentLocation && currentLocation.replace(/^\//, '').replace(/\/$/, "").replace (/^/,'/');;
  console.log("OMGGG", currentLocation)
  return currentLocation == redirect ?
    <div className={ styles.active }>{text}</div> :
    <Link className={ styles.link } to={redirect}>
      {text}
    </Link>

}

export default Nav
