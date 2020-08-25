import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./Main/Main";
import Filter from "./components/Filter/Filter";
function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route  exact path='/' component={Main}/>
        <Route exact path='/filter/:fil' component={Filter}/>
      </Switch>
    </Fragment>
  );
}

export default App;
