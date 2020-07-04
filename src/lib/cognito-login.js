// Signin function with email as an username
import { Auth } from 'aws-amplify'
import { navigate } from 'gatsby'

export default async function signIn({ email, password }) {
  try {
    await Auth.signIn({
      username: email,
      password,
    });
    navigate('/')
  } catch (error) {
    return -1
  }
}