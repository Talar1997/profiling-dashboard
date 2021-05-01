import ContentContainer from "../layout/ContentContainer";
import MainLayout from "../layout/MainLayout";

export default function Dashboard(props) {
  let data = props.data ? props.data : "No props passed. Default data";
  //TODO: implement example redux store/action/reducer with hooks
  // https://react-redux.js.org/api/hooks
  return (
    <MainLayout>
      <ContentContainer data={data} />
    </MainLayout>
  );
}
