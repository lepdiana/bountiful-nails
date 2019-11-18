import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.js'
import About from './components/About.js'
import Services from './components/Services.js';
import ContactUs from './components/ContactUs.js'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contactus' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
