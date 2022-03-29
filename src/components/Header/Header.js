import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "../Text"

const Header = ({ siteTitle }) => (
  <Head>
    <Text variant="big" fontWeight="600" textAlign="left">
      <RouterLink to="/">{siteTitle}</RouterLink>
    </Text>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

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
