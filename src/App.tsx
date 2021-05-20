import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './features/routes'
import history from './app/utils/history'

const App: React.FC = () => {
  return (
    <Router {...{history}}>
      <Routes/>
    </Router>
  )
}

export default App;
