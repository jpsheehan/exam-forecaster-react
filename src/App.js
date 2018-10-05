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
          <footer class="page-footer">
            <div className="container">
              <p>Disclaimer: I make no guarantees or claims that the information represented by this application is accurate.</p>
            </div>
            <div className="footer-copyright">
              <div className="container">
                Copyright &copy; 2018 JP Sheehan
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
