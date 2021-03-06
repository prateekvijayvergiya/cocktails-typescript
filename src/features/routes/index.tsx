import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './../components/home/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  )
}

export default Routes