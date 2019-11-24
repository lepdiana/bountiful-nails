import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home.js'
import Navbar from './Components/Navbar.js'
import About from './Components/About.js'
import Services from './Components/Services.js'
import ContactUs from './Components/ContactUs.js';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
        <Route path='/contactus' component={ContactUs}/>
      </Switch>
    </div>
  );
}

export default App;
