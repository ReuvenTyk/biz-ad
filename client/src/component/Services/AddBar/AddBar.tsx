import { useFormik } from "formik";
import Title from "../../Title/Title";

function AddBar() {
  const formik = useFormik({
    initialValues: { service: "", status: "active" },
    onSubmit: (values) => {},
  });
  return (
    <>
      <form action="">
        <div className="d-flex">
          <label htmlFor="service">Service Name:</label>
          <select
            className="form-select mx-3"
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
          >
            <option value="" label="Select a Service"></option>
            <option value="mailingList" label="mailingList">
              Mailing List
            </option>
            <option value="whatsApp" label="whatsApp">
              WhatsApp Group Notification
            </option>
          </select>

          <select
            className="form-select mx-3"
            id="service"
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
          >
            <option value="active">Active</option>
            <option value="disabled">Disabled</option>
          </select>

          <button type="submit" className="btn btn-info text-white">
            Add Service
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBar;
