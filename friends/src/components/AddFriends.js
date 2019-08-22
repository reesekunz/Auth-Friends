import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";


const AddFriendForm = ({ errors, touched, values, handleSubmit, status }) => {
  return (
    <div className="login-form">
      <h1>Add Friend</h1>
      <Form>
        {/* Name Input  */}
        <Field type="text" name="name" placeholder="name" />*
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        {/* Age Input  */}
        <Field type="text" name="age" placeholder="age" />*
        {touched.age && errors.age && <p className="error">{errors.age}</p>}
        {/* Email Input  */}
        <Field type="text" name="email" placeholder="email" />*
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};

const FormikAddFriendForm = withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || "",
      age: age || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    email: Yup.string().required()
  }),

  handleSubmit(values, { props, setStatus, resetForm }) {
    // console.log('handle submit props', props)
    // console.log('handle submit values', values)
    props.postData(values);
    resetForm();
  }
})(AddFriendForm); // currying functions in Javascript

export default FormikAddFriendForm;
// Login Credentials = username: Lambda School, password: i<3Lambd4
// .then console.log(response) = response.data.payload
