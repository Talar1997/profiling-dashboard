import ContentContainer from "../layout/ContentContainer";
import MainLayout from "../layout/MainLayout";

export default function Dashboard(props) {
  return (
    <MainLayout>
      <ContentContainer data={props.data} />
    </MainLayout>
  );
}
