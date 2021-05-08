import {
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderName,
  SkipToContent
} from "carbon-components-react/lib/components/UIShell"
import Search20 from "@carbon/icons-react/lib/search/20"
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20"
import React from "react"
import {Link} from "react-router-dom"


export default function NavigationBar(props) {
  return (
    <>
      <SkipToContent/>

      <HeaderMenuButton
        aria-label="Open menu"
        onClick={props.onClick}
        isActive={props.isActive}
      />

      <HeaderName element={Link} to="/" prefix="RM">
        Profiling dashboard
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {
        }}>
          <Search20/>
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={props.toggleSwitcher}>
          <AppSwitcher20/>
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </>
  )
}
