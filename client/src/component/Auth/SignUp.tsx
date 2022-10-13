import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../services/apiService";
import Joi from "joi";
import Title from "../Title/Title";
import { useEffect, useRef } from "react";

export interface IErrors {
  [key: string]: string;
}

function SignUp() {
  const navigate = useNavigate();

  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: (values) => {
      const errors: IErrors = {};

      const schema = Joi.object().keys({
        name: Joi.string().required().min(2).max(256),
        email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: false } })
          .required()
          .min(6)
          .max(256),
        password: Joi.string().required().min(6).max(1024).label("Password"),
        confirmPassword: Joi.any()
          .required()
          .equal(Joi.ref("password"))
          .options({
            messages: {
              "any.only": "confirm password does not match password",
            },
          }),
      });

      const { error } = schema.validate(values);

      if (error) {
        error.details.forEach((item) => {
          if (item.context) {
            const key = item.context.key + "";
            errors[key] = item.message;
          }
        });
      }
      return errors;
    },

    onSubmit: (values) => {
      const sendToServer = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      postRequest("users/signup", sendToServer).then((res) => {
        console.log("signup");
        navigate("/login");
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container-fluid w-50">
      <Title text="Sign Up" cssBgc="white" />
      <div className="d-flex flex-row align-items-center mb-4">
        <input
          ref={inputRef}
          className="form-control"
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="form-control"
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="form-control"
        />

        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="form-control"
        />

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-danger">{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
