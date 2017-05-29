import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"
import Nav from "../../page-components/Nav"

import Loading from "../../components/Loading"

import styles from "./index.css"
import logo from "../../icons/logo.png"


const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta } />

      <div
        className={ styles.hero }
        style={ head.hero && {
          background: `#111 url(${ head.hero }) 50% 50% / cover`,
        } }>
        <div className={ styles.header }>
          <div className={ styles.wrapper }>
            <h1 className={ styles.heading }> 
              Yoku Sushi 
              <img src={logo} width="120px"/>
            </h1>
          </div>
        </div>
      </div>

      <Nav url={__url}/>


      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading />
            : <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
