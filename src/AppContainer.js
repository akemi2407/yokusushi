import React, { PropTypes } from "react"

import "./index.global.css"

import Container from "./page-components/Container"
import DefaultHeadMeta from "./page-components/DefaultHeadMeta"
import Content from "./page-components/Content"
import Footer from "./page-components/Footer"
import Header from "./page-components/Header"


const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
