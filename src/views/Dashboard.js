import ContentContainer from "../components/layout/ContentContainer";
import MainLayout from "../components/layout/MainLayout";

export default function Dashboard(props) {
  const addr = process.env.REACT_APP_ADDR ? process.env.REACT_APP_ADDR : 'not found'
  const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'not found'

  return (
    <MainLayout>
      <ContentContainer>
        <p>{addr}, {env}</p>
      </ContentContainer>
    </MainLayout>
  );
}
