import styled from "@emotion/styled"
import React from "react"
import { color, layout, space, typography } from "styled-system"
import theme from "../../../theme"

const IntroTextComponent = styled("h1")`
${typography}
${space} 
${color}
${layout}
line-height:1.1;
font-size: clamp(2rem, 4.5vw, 4.5rem);

  > span {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${theme.colors.primary};
      color: transparent
  }
`

const IntroText = props => <IntroTextComponent color="primary" {...props} />

export default IntroText