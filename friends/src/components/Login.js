import React, { useState } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {

  return (
    <div className="login-form">
      <h1>Login</h1>
      <Form>
        <Field type="text" name="username" placeholder="username" />*
        {props.touched.username && props.errors.username && (
          <p className="error">{props.errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="password" />*
        {props.touched.password && props.errors.password && <p className="error">{props.errors.password}</p>}
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

  handleSubmit( event, credentials ){
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        // history.push("/friendslist");
      })
      .catch(error => console.log(error.response));
  },
})(LoginForm);

export default FormikLoginForm;

// Login Credentials = username: Lambda School, password: i<3Lambd4
// .then console.log(response) = response.data.payload
