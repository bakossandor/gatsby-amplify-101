import { Auth } from 'aws-amplify'

export default async function() {
  try {
    const user = await Auth.currentAuthenticatedUser()
    return user;
  } catch (error) {
    return null
  }
}