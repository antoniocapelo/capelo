import styled from "@emotion/styled"
import React, { forwardRef } from "react"
import { color, flexbox, layout, space } from "styled-system"
import useUserAgent from "../../providers/user-agent/useUserAgent"
import theme from "../../theme"

const ContentBase = styled("section")`
  ${layout}
  ${space}
  ${flexbox}
  ${color}
  scroll-margin: ${theme.layout.headerHeight - 1}px;
  box-sizing: border-box;
  position: relative;
  min-height: ${({ isIos, fullHeight }) =>
    fullHeight
      ? isIos
        ? `calc(100vh - ${
            theme.layout.headerHeight + theme.layout.iosBottomBarHeight
          }px)`
        : `calc(100vh - ${theme.layout.headerHeight}px)`
      : "0px"};

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100vw;
    left: 50%;
    top: 0;
    background: inherit;
    transform: translateX(-50%);
    z-index: -1;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: ${({ isIos, fullHeight }) =>
      fullHeight
        ? isIos
          ? `calc(100vh - ${theme.layout.iosBottomBarHeight}px)`
          : "100vh"
        : "0px"};
  }
`

const Content = forwardRef(({ fullHeight, ...props }, ref) => {
  const { isIos } = useUserAgent()

  return (
    <ContentBase
      ref={ref}
      fullHeight={fullHeight}
      isIos={isIos}
      mx="auto"
      px={[5, 5, 7]}
      maxWidth={theme.maxContentWidth}
      minWidth={theme.minContentWidth}
      {...props}
    />
  )
})

export default Content
