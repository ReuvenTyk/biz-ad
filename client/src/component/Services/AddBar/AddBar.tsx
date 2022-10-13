import { useFormik } from "formik";
import Title from "../../Title/Title";

function AddBar() {
  const formik = useFormik({
    initialValues: { service: "", status: "active" },
    onSubmit: (values) => {},
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex align-items-center p-3 my-4">
          <div className="d-flex flex-row mx-3">
            <label className="align-self-center w-50">Service Name:</label>
            <select
              className="form-select"
              name="service"
              value={formik.values.service}
              onChange={formik.handleChange}
            >
              <option value="" label="Select a Service"></option>
              <option value="mailingList">Mailing List</option>
              <option value="whatsApp">WhatsApp Group Notification</option>
            </select>
          </div>
          <div className="d-flex flex-row mx-3">
            <label className="align-self-center">Status:</label>
            <select
              className="form-select mx-3"
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
            >
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          <button type="submit" className="btn btn-info text-white">
            Add Service
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBar;
