import { deleteRequest, getRequest } from "../../../services/apiService";
import { ServiceType } from "../Services";
import Status from "../Status/Status";

interface Props {
  services: Array<ServiceType>;
  deleteService: Function;
}

function deleteAndUpdate(id: string, services: Array<ServiceType>) {
  deleteRequest("services/", id);
  const res = getRequest("services/");
  if (!res) {
    return;
  }

  res
    .then((res) => res.json())
    .then((json) => {
      services = json;
    });
}

function Table(props: Props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Service Name</th>
          <th className="w-25">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.services.map((service) => (
          <tr key={service._id} className="bg-light">
            <td>{service.service}</td>
            <td>
              <Status type={service.status}></Status>
            </td>
            <td>
              <button
                onClick={() => props.deleteService(service._id)}
                className="btn btn-default"
              >
                <i className="bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
