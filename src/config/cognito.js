export default {
  mandatorySignIn: true,
  region: process.env.COGNITO_REGION,
  userPoolId: process.env.COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.COGNITO_USER_POOL_WEB_CLIENT_ID,
}