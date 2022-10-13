import Status from "../Status/Status";

interface Props {}

function Table() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Service Name</th>
          <th className="w-25">Status</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.users.map((user) => (
            <tr key={user._id} className="bg-light">
              <td>{user.fullName}</td>
              <td>
                <Status type={user.status}></Status>
              </td>
              <td>{user.email}</td>
              <td>
                <button
                  //the add of arrow func so the function won't start before clicking
                  onClick={() => props.deleteUser(user._id, user.fullName)}
                  className="btn btn-default"
                >
                  <i className="bi-trash3"></i>
                </button>
              </td>
            </tr>
          ))} */}
      </tbody>
    </table>
  );
}

export default Table;
