import { Layout } from "antd";

const { Content } = Layout;

export default function ContentContainer(props) {
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 32px", marginTop: 32 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        {props.children}
      </div>
    </Content>
  );
}
