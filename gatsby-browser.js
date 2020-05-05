/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { ThemeProvider } from "emotion-theming"
import React from "react"
import UserAgentProvider from "./src/providers/user-agent/UserAgentProvider"
import theme from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <UserAgentProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </UserAgentProvider>
)
