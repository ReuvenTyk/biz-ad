import { NavLink } from "react-router-dom";
import Title from "../Title/Title";

function About() {
  return (
    <>
      <Title text="About This App" cssBgc="black" />
      <div className="container-fluid d-flex flex-column w-50">
        <p className="lead text-center">
          This app is the best place for your place <br /> Join us TODAY!
        </p>

        <NavLink to="/" className="btn btn-primary my-2 mx-auto w-25">
          Start Today
        </NavLink>
      </div>
    </>
  );
}

export default About;
