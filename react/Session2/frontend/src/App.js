import React, { Component } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import HomeScreen from "./containers/HomeScreen";
import DetailScreen from "./containers/DetailScreen";
import GirlAdmin from "./components/GirlAdmin";

class App extends Component {
  render() {
    return (
      <div> 
          <Switch>
            <Route path ="/admin" component={GirlAdmin} />
            <Route path="/girl/:id" component={DetailScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        
      </div>

    )
  };
}

export default withRouter(App);
