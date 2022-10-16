import { useEffect, useState } from "react";
import { postRequest } from "../../../services/apiService";
import { ServiceType } from "../ServicesPage";

interface Props {
  services: Array<ServiceType>;
  addService: Function;
}

function AddBar(props: Props) {
  const [service, setService] = useState<string>("");
  const [status, setStatus] = useState<string>("active");
  const [enabled, setEnabled] = useState<boolean>(true);
  const [check, setCheck] = useState<boolean>(false);
  const [exist, setExist] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    const values = {
      service: service,
      status: status,
      description: "",
    };
    if (!exist) {
      postRequest("services/", values).then((res) => {
        props.addService();
        setExist(true);
      });
    }
  }

  function checkService(value: string) {
    setService(value);

    if (props.services.length === 0) {
      setExist(false);
    }

    for (const service of props.services) {
      if (service.service === value) {
        setExist(true);
        break;
      } else setExist(false);
    }

    if (value === "") {
      setEnabled(true);
      setCheck(true);
    } else {
      setEnabled(false);
      setCheck(false);
    }
  }

  return (
    <>
      <form className="d-flex align-items-center p-3 my-4">
        <div className="d-flex flex-row mx-3">
          <label className="align-self-center w-50">Service Name:</label>
          <select
            className="form-select"
            id="service"
            name="service"
            onChange={(e) => {
              checkService(e.target.value);
            }}
            value={service}
          >
            <option value="" label="Select a Service"></option>
            <option value="Mailing List">Mailing List</option>
            <option value="whatsApp">WhatsApp Group Notification</option>
          </select>
        </div>

        {check ? <div className="text-danger">Choose a service</div> : null}

        <div className="d-flex flex-row mx-3">
          <label className="align-self-center">Status:</label>
          <select
            className="form-select mx-3"
            id="status"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active" label="Active">
              Active
            </option>
            <option value="disabled" label="Disabled">
              Disabled
            </option>
          </select>
        </div>
        <input
          value="Add Service"
          type="submit"
          onClick={handleSubmit}
          className="btn btn-info text-white"
          disabled={enabled || exist}
        />
        {exist ? (
          <div className="text-danger">Services all ready Exist</div>
        ) : null}
      </form>
    </>
  );
}

export default AddBar;
