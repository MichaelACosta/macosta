import React from "react"
import { Row, RowProps } from "./Row"

const Column: React.FC<RowProps> = (props) => (
  <Row flexDirection="column" {...props} />
)

export { Column }
