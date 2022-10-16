import { Link } from "react-router-dom";
import { ServiceType } from "../ServicesPage";
import Status from "../Status/Status";

interface Props {
  services: Array<ServiceType>;
  deleteService: Function;
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
            <td>
              <Link to="/updateService" state={service}>
                {service.service}
              </Link>
            </td>
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
