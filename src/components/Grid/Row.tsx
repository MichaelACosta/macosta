import styled, { css } from "styled-components"
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
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  BackgroundProps,
  GridProps as StyledSystemGridProps,
} from "styled-system"

export interface RowProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    BackgroundProps,
    StyledSystemGridProps {
  gap?: string | number
}

const Row = styled.div<RowProps>(
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
  grid,
  ({ gap }) =>
    gap &&
    css`
      gap: ${typeof gap === "number" ? `${gap}px` : gap};
    `
)

export { Row }
