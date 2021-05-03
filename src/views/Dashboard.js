import ContentContainer from "../components/layout/ContentContainer";
import MainLayout from "../components/layout/MainLayout";

export default function Dashboard(props) {
  //TODO: implement example redux store/action/reducer with hooks
  // https://react-redux.js.org/api/hooks

  return (
    <MainLayout>
      <ContentContainer>
        <p>Put here your content!</p>
      </ContentContainer>
    </MainLayout>
  );
}
