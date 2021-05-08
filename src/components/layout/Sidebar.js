import {SideNav, SideNavItems, SideNavLink} from "carbon-components-react/lib/components/UIShell"
import React from "react"
import {routes} from "../../routes/routes";
import {useLocation} from "react-router"
import {Link} from "react-router-dom"

export default function Sidebar(props) {
  let location = useLocation();

  const isInPath = (path) => location.pathname === path ? 'page' : ''

  const menuItems = routes
    .filter((route) => route.showInSidebar)
    .map((route) => (
      <SideNavLink key={route.to} renderIcon={route.icon} aria-current={isInPath(route.to)} element={Link} to={route.to}
                   large>
        {route.description}
      </SideNavLink>
    ));

  return (
    <>
      <SideNav aria-label="Side navigation" expanded={props.isSideNavExpanded}>
        <SideNavItems>
          {menuItems}
        </SideNavItems>
      </SideNav>
    </>
  )
}
