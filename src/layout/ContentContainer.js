import { Layout } from "antd";

const { Content } = Layout;

export default function ContentContainer() {
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        Content that should be able to change dynamically
      </div>
    </Content>
  );
}
