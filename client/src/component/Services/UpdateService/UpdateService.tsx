import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { patchRequest } from "../../../services/apiService";
import Title from "../../Title/Title";
import { ServiceType } from "../Services";

interface LocationState {
  state: ServiceType;
}

function UpdateService() {
  const location = useLocation();
  const locationState = location as LocationState;
  const service = locationState.state;
  const navigate = useNavigate();

  const [status, setStatus] = useState<string>(service.status);
  const [statusChange, setStatusChange] = useState<boolean>(true);
  const [comment, setComment] = useState<string>(service.description);
  const [commentChange, setCommentChange] = useState<boolean>(true);

  function redirect() {
    navigate("/services");
  }

  function updateService(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    const values = {
      service: service.service,
      status: status,
      description: comment,
    };

    patchRequest(`services/`, values).then(() => console.log("updated"));
    redirect();
  }

  function changedStatus(value: string) {
    if (value !== service.status) {
      setStatusChange(false);
    }
    if (value === service.status) {
      setStatusChange(true);
    }
    setStatus(value);
  }

  function changedComment(value: string) {
    if (value !== service.description) {
      setCommentChange(false);
    }
    if (value === service.description) {
      setCommentChange(true);
    }
    setComment(value);
  }

  return (
    <>
      <Title
        text="Update Service"
        secText={`Service: ${service.service}`}
        cssBgc="black"
      />

      <form className="form-control">
        <div className="d-flex flex-column m-3 w-25">
          <label className="mb-2">Status</label>
          <select
            className="form-select mx-3"
            id="newStatus"
            name="newStatus"
            onChange={(e) => changedStatus(e.target.value)}
          >
            <option value="active" label="Active">
              Active
            </option>
            <option value="disabled" label="Disabled">
              Disabled
            </option>
          </select>
        </div>
        <div className="d-flex flex-column m-3 w-25">
          <label>Comment</label>
          <textarea
            value={comment}
            className="form-control"
            onChange={(e) => changedComment(e.target.value)}
          />
        </div>

        <input
          value="Add Service"
          type="submit"
          onClick={updateService}
          className="btn btn-primary m-3"
          disabled={statusChange && commentChange}
        />

        <button className="btn btn-secondary" onClick={redirect}>
          Cancel
        </button>
      </form>
    </>
  );
}

export default UpdateService;
