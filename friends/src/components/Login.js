import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ errors, touched, values, handleSubmit, status }) => {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <Form>
        <Field type="text" name="username" placeholder="username" />*
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="password" />*
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("http://localhost:5000/api/login", values)
      .then(response => {
          console.log(response)
        localStorage.setItem("token", response.data.payload);
        // localStorage.setItem("token", JSON.stringify(response.data) - if want to send entire array or object to local storage
        
      })
      .catch(error => console.log(error.response));
  }
})(LoginForm);

export default FormikLoginForm;

// Login Credentials = username: Lambda School, password: i<3Lambd4
// .then console.log(response) = response.data.payload
