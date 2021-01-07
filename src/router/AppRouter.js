import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { CommitGridCard } from '../components/GridCard/CommitGridCard';
import { CardDetailed } from '../components/CardDetailed/CardDetailed';
export const AppRouter = () =>{
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <CommitGridCard/>
        </Route>
        <Route path="/detail/:id" component={CardDetailed}/>
      </Switch>
    </Router>
  )
}