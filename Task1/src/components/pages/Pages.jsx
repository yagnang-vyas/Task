import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Login from "../Login"
import Signup from "../Signup"


const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Signup} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
