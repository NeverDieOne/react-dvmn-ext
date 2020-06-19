import React from 'react';
import Home from "./views/Home"
import Settings from "./views/Settings"
import Context from "./context";

import {
  Route,
  Switch,
  withRouter,
    Redirect
} from "react-router-dom"

function App(props) {
  const {history} = props
  const [token, setToken] = React.useState('hello')

  return (
      <Context.Provider value={{setToken, token}}>
        <div className="wrapper container mb-3">
          <h1>Devman Lessons
            <img width="30" src="https://dvmn.org/assets/img/logo_small.75f0bf1bbe74.svg" alt="" className="ml-1"/>
          </h1>
          <hr/>

          <Switch>
            <Route history={history} path='/home' component={Home}/>
            <Route history={history} path='/settings' component={Settings}/>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </Context.Provider>

  );
}

export default withRouter(App);
