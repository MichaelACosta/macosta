import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"

const Wrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <WrapperBox>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </WrapperBox>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

const WrapperBox = styled.div`
  background-color: #1c1d25;
  padding: 0 15%;
  min-height: 100vh;
`

export default Wrapper
