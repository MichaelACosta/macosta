import styled from "styled-components"
import {
  space,
  layout,
  color,
  flexbox,
  border,
  shadow,
  position,
  background,
  grid,
} from "styled-system"

const Row = styled.div(
  {
    display: "flex",
  },
  flexbox,
  space,
  layout,
  color,
  border,
  shadow,
  position,
  background,
  grid
)

export { Row }
