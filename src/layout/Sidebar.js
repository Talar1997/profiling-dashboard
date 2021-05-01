import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../routes/routes";

const { Sider } = Layout;

export default function Sidebar(props) {
  let location = useLocation();

  const menuItems = routes
    .filter((route) => route.showInSidebar)
    .map((route) => (
      <Menu.Item key={route.to} icon={route.icon}>
        <NavLink to={route.to}>{route.description}</NavLink>
      </Menu.Item>
    ));

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={location.pathname}>
        {menuItems}
      </Menu>
    </Sider>
  );
}
