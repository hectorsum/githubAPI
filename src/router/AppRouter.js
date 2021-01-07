import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { CommitGridCard } from '../components/GridCard/CommitGridCard';
import { CardDetailed } from '../components/CardDetailed/CardDetailed';
import { NotFound } from '../components/NotFound/NotFound';
export const AppRouter = () =>{
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={CommitGridCard}/>
        <Route path="/detail/:id" component={CardDetailed}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}