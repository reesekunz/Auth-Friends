import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

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
          {touched.size && errors.size && <p className="error">{errors.size}</p>}

  
          <button type="submit">Submit!</button>
        </Form>
          </div>
       
    );
  };

  const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
       
        username: username || '',
        password: password || ''
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
  
    handleSubmit(values, { setStatus }) {
        axios
          .post('http://localhost:5000/api/login', values)
          .then(response => console.log(response))
          .catch(error => console.log(error.response));
      }
    })(LoginForm); // currying functions in Javascript
    
    export default FormikLoginForm;
    
      