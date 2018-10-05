import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Course from "./components/Course";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:course_code" component={Course} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
