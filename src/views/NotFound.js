import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Layout } from "antd";

const { Content } = Layout;

export default function NotFound() {
  return (
    <MainLayout>
      <Content className="site-layout">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      </Content>
    </MainLayout>
  );
}
