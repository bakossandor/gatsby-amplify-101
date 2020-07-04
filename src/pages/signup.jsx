import React, { useState } from "react"
import { navigate } from 'gatsby'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/layout'
import signup from '../lib/cognito-signup'

const Signup = () => {
  const [customErrorMessage, setCusetcustomErrorMessages] = useState(null)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
          "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character."
        )
    }),
    onSubmit: async function ({ email, password }) {
      const resposne = await signup({ email, password });
      if (resposne === -1) {
        setCusetcustomErrorMessages("Wrong email or password")
        return;
      }
      navigate('/welcome', { state: { email: formik.values.email }});
    },
  });

  return (
    <Layout>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Sign Up Here!</h2>
        <label htmlFor="email">Email Address</label>
        <input name="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (
          <div className="errorMessage">{formik.errors.email}</div>
        ) : null}
        <hr/>
        <label htmlFor="password">Password</label>
        <input id="signup-password" name="password" type="password" {...formik.getFieldProps('password')} />
        {formik.touched.password && formik.errors.password ? (
          <div className="errorMessage">{formik.errors.password}</div>
        ) : null}
        <button className="button" type="submit">Submit</button>
        {customErrorMessage ? (
          <span className="errorMessage">{customErrorMessage}</span>
        ) : null}
      </form>
    </Layout>
  );
};

export default Signup