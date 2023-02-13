import React from "react"
import Wrapper from "../components/Wrapper/Wrapper"
import Seo from "../components/Seo/Seo"
import { Text } from "../components/Text"

const NotFound = () => {
  return (
    <Wrapper>
      <Seo title="not found" />
      <Text
        variant="big"
        color="#b0b2c3"
        textAlign="left"
        m="20px 0"
        fontWeight="600"
      >
        Não encontramos o que você procura!
      </Text>
    </Wrapper>
  )
}

export default NotFound
