import { NavLink } from "react-router-dom";
import Title from "../Title/Title";

function About() {
  return (
    <>
      <Title text="About This App" cssBgc="black" />
      <div className="container-fluid d-flex flex-column w-50">
        <p className="lead text-center">
          This app is the best place for your Business <br />
          What To know why? <br />
          Join us TODAY and find out!
        </p>

        <NavLink
          to="/"
          className="btn btn-primary my-2 mx-auto"
          style={{ width: "110px" }}
        >
          Start Today
        </NavLink>
      </div>
    </>
  );
}

export default About;
