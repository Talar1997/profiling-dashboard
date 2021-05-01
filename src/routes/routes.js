import {
  CloudServerOutlined,
  LogoutOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import Dashboard from "../views/Dashboard";

export const routes = [
  {
    showInSidebar: true,
    to: "/",
    description: "Dashboard",
    icon: <DashboardOutlined />,
    view: <Dashboard data="Dashboard" />,
    exact: true,
  },
  {
    showInSidebar: true,
    to: "/server-utilization",
    description: "Server utilization",
    icon: <CloudServerOutlined />,
    view: <Dashboard data="Server utilization" />,
    exact: true,
  },
  {
    showInSidebar: true,
    to: "/users/connected",
    description: "Connected users",
    icon: <UserSwitchOutlined />,
    view: <Dashboard data="Connected users" />,
    exact: true,
  },
  {
    showInSidebar: true,
    to: "/users",
    description: "All users",
    icon: <UsergroupAddOutlined />,
    view: <Dashboard data="All users" />,
    exact: true,
  },
  {
    showInSidebar: false,
    to: "/user/:data",
    description: "All users",
    icon: <UsergroupAddOutlined />,
    view: <Dashboard />,
    exact: false,
  },
  {
    showInSidebar: true,
    to: "/settings",
    description: "Settings",
    icon: <SettingOutlined />,
    view: <Dashboard data="Settings" />,
    exact: true,
  },
  {
    showInSidebar: true,
    to: "/logout",
    description: "Logout",
    icon: <LogoutOutlined />,
    view: <Dashboard data="Logout" />,
    exact: true,
  },
];
