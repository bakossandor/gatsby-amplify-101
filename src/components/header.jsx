import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import user from '../lib/current-user'
import signout from '../lib/cognito-signout'

import './header.css'

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    async function getUserData() {
      try {
        const { attributes: { email } = {} } = await user();
        setUserEmail(email)
      } catch (error) {
        setUserEmail(null)
      }
    }
    getUserData();
  }, [])


  return (
    <nav>
      {userEmail ? (
        <div>
          <span className="signOut" onClick={signout}>Sign Out!</span>
        </div>
        ) : 
        <div>
          <Link to="/signup">Sign Up!</Link>
          <Link to="/login">Sign In!</Link>
        </div>
      }
    </nav>
  )
}

export default Header