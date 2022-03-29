import PropTypes from "prop-types"
import styled from "styled-components"
import {
  space,
  layout,
  typography,
  color,
  variant,
  position,
} from "styled-system"

const BIG = "big"
const MEDIUM = "medium"
const REGULAR = "regular"
const SMALL = "small"

const Text = styled.p(
  variant({
    prop: "lineClamp",
    variants: {
      false: {
        fontSize: 4,
        lineHeight: "heading",
      },
      true: {
        display: "-webkit-box",
        "-webkit-line-clamp": "3",
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
      },
    },
  }),
  variant({
    variants: {
      [BIG]: {
        fontSize: 28,
      },
      [MEDIUM]: {
        fontSize: 24,
      },
      [REGULAR]: {
        fontSize: 20,
      },
      [SMALL]: {
        fontSize: 16,
      },
    },
  }),
  ({ textDecoration }) => `
    margin: 0px;
    text-decoration: ${textDecoration};
  `,
  space,
  layout,
  typography,
  color,
  position
)

Text.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf([BIG, MEDIUM, REGULAR, SMALL])),
    PropTypes.oneOf([BIG, MEDIUM, REGULAR, SMALL]),
  ]),
}

Text.defaultProps = {
  variant: "regular",
  fontFamily: "Ubuntu",
  textDecoration: "none",
  lineClamp: false,
}

export { Text }
