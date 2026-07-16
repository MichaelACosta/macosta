import styled from "styled-components"
import {
  space,
  layout,
  typography,
  color,
  variant,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  PositionProps,
} from "styled-system"

const BIG = "big"
const MEDIUM = "medium"
const REGULAR = "regular"
const SMALL = "small"

export type TextVariant = "big" | "medium" | "regular" | "small"

export interface TextProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    PositionProps {
  variant?: TextVariant | TextVariant[]
  lineClamp?: boolean
  textDecoration?: string
}

const Text = styled.p.attrs<TextProps>(
  ({ variant: variantProp, textDecoration, lineClamp }) => ({
    variant: variantProp ?? REGULAR,
    textDecoration: textDecoration ?? "none",
    lineClamp: lineClamp ?? false,
  })
)<TextProps>(
  variant({
    prop: "lineClamp",
    variants: {
      false: {
        fontSize: 4,
        lineHeight: "heading",
      },
      true: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
  }),
  variant({
    variants: {
      [BIG]: {
        fontSize: 26,
      },
      [MEDIUM]: {
        fontSize: 22,
      },
      [REGULAR]: {
        fontSize: 18,
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

export { Text }
