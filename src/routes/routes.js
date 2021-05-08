import Dashboard from "../views/Dashboard";
import Settings from "../views/Settings";
import User from "../views/User";
import Users from "../views/Users";
import ConnectedUsers from "../views/ConnectedUsers";
import ServerUtilization from "../views/ServerUtilization";
import {Redirect} from "react-router-dom";
import DashboardReference32 from "@carbon/icons-react/lib/dashboard--reference/32"
import ChartBarStacked32 from "@carbon/icons-react/lib/chart--bar-stacked/32"
import Events32 from "@carbon/icons-react/lib/events/32"
import Collaborate32 from "@carbon/icons-react/lib/collaborate/32"
import Person32 from "@carbon/icons-react/lib/person/32"
import Settings32 from "@carbon/icons-react/lib/settings/32"
import Logout32 from "@carbon/icons-react/lib/logout/32"

export const routes = [
  {
    to: "/",
    description: "Dashboard",
    icon: () => <DashboardReference32/>,
    view: <Dashboard/>,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/server-utilization",
    description: "Server utilization",
    icon: () => <ChartBarStacked32/>,
    view: <ServerUtilization/>,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/users/connected",
    description: "Connected users",
    icon: () => <Collaborate32/>,
    view: <ConnectedUsers/>,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/users",
    description: "All users",
    icon: () => <Events32/>,
    view: <Users/>,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/user/:data",
    description: "All users",
    icon: () => <Person32/>,
    view: <User/>,
    exact: false,
    requireLogin: true,
    showInSidebar: false,
  },
  {
    to: "/settings",
    description: "Settings",
    icon: () => <Settings32/>,
    view: <Settings/>,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/logout",
    description: "Logout",
    icon: () => <Logout32/>,
    view: <Redirect to={{pathname: "/login"}}/>,
    exact: true,
    requireLogin: false,
    showInSidebar: true,
  },
];
