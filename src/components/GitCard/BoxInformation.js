import React from "react"
import { Column } from "../Grid"
import { Text } from "../Text"

const BoxInformation = ({ value, label }) => {
  if (value)
    return (
      <Column width={["30%", "100%"]} m={["0", "0 auto"]}>
        <Text
          textAlign="center"
          color="#b0b2c3"
          variant={["regular", "medium"]}
          fontWeight="600"
        >
          {value}
        </Text>
        <Text textAlign="center" color="#f3f3f3" variant={["small", "regular"]}>
          {label}
        </Text>
      </Column>
    )
}
export default BoxInformation
