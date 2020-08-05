import React from 'react'
import ReactDOM from 'react-dom'
import { AppWithAuthenticator } from './App'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)


ReactDOM.render(
  <React.StrictMode>
    <AppWithAuthenticator />
  </React.StrictMode>,
  document.getElementById('root'),
)
