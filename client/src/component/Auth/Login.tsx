import { NavLink } from "react-router-dom";
import Title from "../Title/Title";

function Login() {
  return (
    <>
      <Title text="Login" />
      <div className="container-fluid w-50">
        <form className="mx-1 mx-md-4">
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="text" placeholder="Email" className="form-control" />
          </div>

          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="text"
              placeholder="Password"
              className="form-control"
            />
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button /* onClick={submit} */ className="btn btn-primary btn-lg">
              Login
            </button>
          </div>

          <div className="text-center">
            <p>
              Not a member?
              {
                <NavLink to="/signup" className="nav-link text-primary">
                  Register
                </NavLink>
              }
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
