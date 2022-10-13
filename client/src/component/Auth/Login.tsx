import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import { IErrors } from "./SignUp";
import Joi from "joi";
import { postRequest } from "../../services/apiService";
import { TOKEN_KEY } from "../../services/auth";
import { useEffect, useRef } from "react";

function Login() {
  const navigate = useNavigate();

  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validate: (values) => {
      const errors: IErrors = {};

      const schema = Joi.object().keys({
        email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: false } })
          .required()
          .min(6)
          .max(256),
        password: Joi.string().required().min(6).max(1024),
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
      const res = postRequest("users/login", values);

      res
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem(TOKEN_KEY, json.token);
          navigate("/");
        });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="container-fluid w-25">
        <Title text="Login" cssBgc="white" />

        <div className="mb-3">
          <input
            ref={inputRef}
            className="form-control"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
