import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Welcome = ({ location: { state: { email }} }) => {
  return (
    <Layout>
      <div className="welcome">
        <h2>Welcome { email }</h2>
        <p>We have sent you an email, please confirm the registration by clicking the provided link in the email</p>
        <Link to="/login">Go to Login!</Link>
      </div>
    </Layout>
  )
}

export default Welcome;