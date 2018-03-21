import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

import { Navbar, Jumbotron, Button } from 'react-bootstrap';

//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './components/pages/homepage';
import Dashboard from './components/pages/dashboard';

//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/dashboard' component={Dashboard} />

        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;





// Dashboard
// <LeftPanel />
// <RightPanel />
//
//
// LeftPanel
// <Channel />
// <User />
