import { Input, Layout, Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

export default function CustomHeader(props) {
  const toggle = () => props.setCollapsed(!props.collapsed);

  const collapsedComponent = props.collapsed ? (
    <MenuUnfoldOutlined className="trigger" onClick={toggle} />
  ) : (
    <MenuFoldOutlined className="trigger" onClick={toggle} />
  );

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Space direction="horizontal">
        {collapsedComponent}
        <Search
          placeholder="input search text"
          allowClear
          onSearch={(value) => console.log(value)}
          style={{ width: 200, marginTop: 15, align: "right" }}
        />
      </Space>
    </Header>
  );
}
