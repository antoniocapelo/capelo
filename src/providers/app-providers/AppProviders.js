import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import React from "react"
import theme from "../../theme"
import DraggableAreaProvider from "../draggable-area-provider/DraggableAreaProvider"
import LoadProgressProvider from "../load-progress/LoadProgressProvider"
import MousePositionProvider from "../mouse-position/MousePositionProvider"
import ScrollProvider from "../scroll-provider/ScrollProvider"
import UserAgentProvider from "../user-agent/UserAgentProvider"
import WindowSizeProvider from "../window-size-provider/WindowSizeProvider"

const AppProviders = ({ children }) => (
  <LoadProgressProvider>
    <UserAgentProvider>
      <ScrollProvider>
        <MousePositionProvider>
          <WindowSizeProvider>
            <DraggableAreaProvider>
              <ThemeProvider theme={theme}>
                <Global
                  styles={{
                    html: {
                      background: theme.colors.dark,
                    },
                    "*": {
                      outlineColor: theme.colors.dark,
                    },
                  }}
                />
                {children}
              </ThemeProvider>
            </DraggableAreaProvider>
          </WindowSizeProvider>
        </MousePositionProvider>
      </ScrollProvider>
    </UserAgentProvider>
  </LoadProgressProvider>
)
export default AppProviders
