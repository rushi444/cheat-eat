import React from 'react'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AmplifySignOut />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export const AppWithAuthenticator = withAuthenticator(App)
