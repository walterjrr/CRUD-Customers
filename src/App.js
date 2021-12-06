import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import TemplatesDefault from './Templates/Default'
import List from './pages/Customers/List'
import Register from './pages/Customers/Register'
import Home from './pages/Home'
import Edit from './pages/Customers/Edit'


function App() {
  return (
    <Router>
        <TemplatesDefault>
          <Switch>
              <Route path="/customers/edit/:id">
                <Edit />
              </Route>
              <Route path="/customers/add">
                <Register />
              </Route> 
              <Route path="/customers">
                <List />
              </Route>
              <Route path="/">
                <Home />
              </Route>  
          </Switch>     
        </TemplatesDefault>
    </Router>
  )
}

export default App
