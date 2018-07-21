import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardComponent from '../pages/DashboardComponent'
import GamesComponent from '../pages/GamesComponent'
import ErrorComponent from '../pages/ErrorComponent'
import ChannelsComponent from '../pages/ChannelsComponent'

const RouteComponent = () => {
  return (
    <Switch>
      <Route path="/" component={DashboardComponent} exact />
      <Route path="/games" component={GamesComponent} />
      <Route path="/channels" component={ChannelsComponent} />
      <Route component={ErrorComponent} />
    </Switch>
  )
}

export default RouteComponent