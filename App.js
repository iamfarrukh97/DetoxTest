import React from 'react'
import { MemberProvider } from './src/context/MemberContext'

import Root from './src/navigation/Root'
const App = () => {
  return (
    <MemberProvider>
      <Root />
    </MemberProvider>
  )
}

export default App
