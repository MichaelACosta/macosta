import React from "react"
import { Text } from "../Text"

const TextToBoby = ({ children }) => (
  <Text
    variant={["small", "regular"]}
    color="#f3f3f3"
    lineHeight="20px"
    textAlign="left"
    mb="15px"
  >
    {children}
  </Text>
)

export default TextToBoby
