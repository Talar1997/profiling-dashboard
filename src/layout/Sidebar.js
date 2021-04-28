import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  CloudServerOutlined,
  SettingOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar(props) {
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<CloudServerOutlined />}>
          Server utilization
        </Menu.Item>
        <Menu.Item key="2" icon={<UserSwitchOutlined />}>
          Connected users
        </Menu.Item>
        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          All users
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="5" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
