import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import About from './components/pages/About';
import Home from './components/pages/Home';
import SingleUser from './components/users/SingleUser';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={SingleUser} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
