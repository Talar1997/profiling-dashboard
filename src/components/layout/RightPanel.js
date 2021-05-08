import {HeaderPanel, Switcher, SwitcherDivider, SwitcherItem} from "carbon-components-react"
import React from "react"
import {externalApps} from "../../routes/external-apps"

export default function RightPanel(props) {
  const externalRoutes = externalApps.map(route => (
    <React.Fragment key={route.name}>
      {route.dividerBefore ? <SwitcherDivider /> : null}
      <SwitcherItem aria-label={route.name}  href={route.href}>{route.name}</SwitcherItem>
    </React.Fragment>
  ))

  return (
    <>
      <HeaderPanel aria-label="External apps" expanded={props.isSwitcherExpanded}>
        <Switcher aria-label="App switcher">
          {externalRoutes}
        </Switcher>
      </HeaderPanel>
    </>
  )
}