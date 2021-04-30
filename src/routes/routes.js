import {
  CloudServerOutlined,
  LogoutOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Dashboard from "../views/Dashboard";

export const routes = [
  {
    to: "/dashboard",
    description: "Server utilization",
    icon: <CloudServerOutlined />,
    view: <Dashboard data="Server utilization" />,
  },
  {
    to: "/users/connected",
    description: "Connected users",
    icon: <UserSwitchOutlined />,
    view: <Dashboard data="Connected users" />,
  },
  {
    to: "/users",
    description: "All users",
    icon: <UsergroupAddOutlined />,
    view: <Dashboard data="All users" />,
  },
  {
    to: "/settings",
    description: "Settings",
    icon: <SettingOutlined />,
    view: <Dashboard data="Settings" />,
  },
  {
    to: "/logout",
    description: "Logout",
    icon: <LogoutOutlined />,
    view: <Dashboard data="Logout" />,
  },
];
