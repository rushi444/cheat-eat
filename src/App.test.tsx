import React from 'react'
import { render } from '@testing-library/react'
import { AppWithAuthenticator } from './App'

test('renders learn react link', () => {
  const { getByText } = render(<AppWithAuthenticator />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
