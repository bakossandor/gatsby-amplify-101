import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import currentUser from '../lib/current-user'

const Profile = () => {
  const [email, setEmail] = useState(null)
  useEffect(() => {
    async function returnUser() {
      try {
        const { attributes: { email } = {}} = await currentUser()
        setEmail(email)
      } catch (error) {
        navigate('/login')
        setEmail(null)
      }
    }
    returnUser()
  }, [])
  return (
    <Layout>
      <div className="welcome">
        <h2>Profile</h2>
        <span>The user email is {email}</span>
      </div>
    </Layout>
  )
}

export default Profile