// Signup function with email as an username
import { Auth } from 'aws-amplify'

export default async function signUp({ email, password }) {
  try {
    const user = await Auth.signUp({
      username: email,
      password,
    });
    return user;
  } catch (error) {
    return -1
  }
}