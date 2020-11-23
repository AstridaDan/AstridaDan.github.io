import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import ScrollToTop from './components/ScroollToTop';


function App() {
    return ( 
        <>
          <Router>
          <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
          </Router>  
        </>
    );
}

export default App;