import ContentContainer from "../layout/ContentContainer";
import MainLayout from "../layout/MainLayout";

export default function Dashboard(props) {
  let data = props.data ? props.data : "No props passed. Default data";
  console.log(props);
  return (
    <MainLayout>
      <ContentContainer data={data} />
    </MainLayout>
  );
}
