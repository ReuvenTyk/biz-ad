import Title from "../Title/Title";

function submit() {
  /* const data = {
    name,
    email,
    password,
  };

  handleRequest("users/signup", data).then((res) => {
    // console.log('registered');
    navigate("/login");
  }); */
}

function SignUp() {
  return (
    <div>
      <Title text="Sign Up" />

      <div className="container-fluid w-50">
        <form className="mx-1 mx-md-4">
          <div className="d-flex flex-row align-items-center mb-4">
            <input type="text" placeholder="Name" className="form-control" />
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <input type="text" placeholder="Email" className="form-control" />
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <input
              type="text"
              placeholder="Password"
              className="form-control"
            />
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <input
              type="text"
              placeholder="Confirm Password"
              className="form-control"
            />
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button onClick={submit} className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
