import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Book from "./Book";
import About from "./About";


class Main extends Component {
render() {
  return (
      <HashRouter>
          <div>          
          <ul className="header">
              <li className="logo">The Salon at Lollipops</li>
              <li><NavLink to="/book">Book</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink exact to="/">Home</NavLink></li>              
          </ul>
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/services" component={Services}/>
              <Route path="/contact" component={Contact}/> 
              <Route path="/book" component={Book}/> 
              <Route path="/about" component={About}/>   
          </div>
          </div>
      </HashRouter>
  );
}
}

export default Main;
