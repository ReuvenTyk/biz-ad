import Title from "../Title/Title";

function Services() {
  return (
    <>
      <Title
        text="Services"
        secText="What makes BizAd the #1 app"
        // cssBgc="bg-white text-dark"
      />

      <table className="table table-hover">
        <thead>
          <tr>
            <th className="w-25">Service Name</th>
            <th className="w-25">Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default Services;
