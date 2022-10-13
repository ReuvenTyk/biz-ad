import Title from "../Title/Title";
import AddBar from "./AddBar/AddBar";
import Table from "./Table/Table";

function Services() {
  return (
    <>
      <Title
        text="Services"
        secText="What makes BizAd the #1 app"
        cssBgc="black"
      />
      <AddBar />
      <Table />
    </>
  );
}

export default Services;
