import {
  CloudServerOutlined,
  DashboardOutlined,
  LogoutOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Dashboard from "../views/Dashboard";
import Settings from "../views/Settings";
import User from "../views/User";
import Users from "../views/Users";
import ConnectedUsers from "../views/ConnectedUsers";
import ServerUtilization from "../views/ServerUtilization";
import { Redirect } from "react-router-dom";

export const routes = [
  {
    to: "/",
    description: "Dashboard",
    icon: <DashboardOutlined />,
    view: <Dashboard />,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/server-utilization",
    description: "Server utilization",
    icon: <CloudServerOutlined />,
    view: <ServerUtilization />,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/users/connected",
    description: "Connected users",
    icon: <UserSwitchOutlined />,
    view: <ConnectedUsers />,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/users",
    description: "All users",
    icon: <UsergroupAddOutlined />,
    view: <Users />,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/user/:data",
    description: "All users",
    icon: <UsergroupAddOutlined />,
    view: <User />,
    exact: false,
    requireLogin: true,
    showInSidebar: false,
  },
  {
    to: "/settings",
    description: "Settings",
    icon: <SettingOutlined />,
    view: <Settings />,
    exact: true,
    requireLogin: true,
    showInSidebar: true,
  },
  {
    to: "/logout",
    description: "Logout",
    icon: <LogoutOutlined />,
    view: <Redirect to={{ pathname: "/login" }} />,
    exact: true,
    requireLogin: false,
    showInSidebar: true,
  },
];
