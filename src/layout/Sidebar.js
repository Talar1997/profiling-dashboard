import { Layout, Menu } from "antd";
import {
  CloudServerOutlined,
  LogoutOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

//TODO: 1. Menu item should be selected regarding current URL.
// in this moment, when go to app by typing url, first Menu.Item will be selected.
// Check defaultSelectedKeys -> https://ant.design/components/menu/#Menu.Item: defaultSelectedKeys={["1"]} in <Menu>

//TODO: 2. When URL doesnt exists and there is 404 Page, selected Menu.Item is first
export default function Sidebar(props) {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<CloudServerOutlined />}>
          <NavLink to="/dashboard"> Server utilization</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserSwitchOutlined />}>
          <NavLink to="/users/connected">Connected users</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          <NavLink to="/users">All users</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          <NavLink to="/settings">Settings</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<LogoutOutlined />}>
          <NavLink to="/logout">Logout</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
