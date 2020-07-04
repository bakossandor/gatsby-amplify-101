import Amplify from 'aws-amplify'
import CognitoConfig from './src/config/cognito'
Amplify.configure({ Auth: CognitoConfig })
