import React from "react"
import { useFormik } from 'formik';

import Layout from '../components/layout'
import login from '../lib/cognito-login'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      await login({ email, password })
    },
  });
  return (
    <Layout>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Login Here</h2>
        <label htmlFor="email">Email Address</label>
        <input name="email" {...formik.getFieldProps('email')} />
        <hr/>
        <label htmlFor="password">Password</label>
        <input id="signup-password" name="password" type="password" {...formik.getFieldProps('password')} />
        <button className="button" type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default Login