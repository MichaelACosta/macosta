import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <Head>
    <Title>
      <RouterLink to="/">{siteTitle}</RouterLink>
    </Title>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Title = styled.h1`
  margin: 0;
`

const RouterLink = styled(Link)`
  color: #b0b2c3;
  text-decoration: none;
`

const Head = styled.header`
  margin: 0 auto;
  width: 100%;
  padding: 1% 0;
`

export default Header
