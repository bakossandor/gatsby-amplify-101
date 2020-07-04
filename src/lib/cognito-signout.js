// Signup function with email as an username
import { Auth } from 'aws-amplify'
import { navigate } from 'gatsby'

export default async function signout() {
  try {
    await Auth.signOut();
    navigate('/login')
  } catch (error) {
    console.log(error)
  }
}