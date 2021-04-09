import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";



import axios from 'axios';
import Weather  from './weatherCard';
import AboutUs from "./AboutUs";
import Town from "./Town";
import './App.css';
import About from './AboutUs';


import React, { Component } from 'react';
require('dotenv').config()

// 
class App extends Component{
  render(){
    return(

      <div className="App">
        <Link to="/">About Us</Link>
        <Link to="/Town"> Town </Link>

        <Switch>

        <Route exact path='/' component={AboutUs} />
            <Route exact path='/Town' component={Town} />
               
        
        
        
        </Switch>
      
        
    </div>
    );
  }
}

export default App;