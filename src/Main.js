import React, { Component } from 'react';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';


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
  //   <div>
  //     <Navbar bg="light" expand="lg">
  //     <Navbar.Brand href="#home">The Salon at Lollipops</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="mr-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#services">Services</Nav.Link>
  //         <Nav.Link href="#contact">Contact</Nav.Link>
  //         <Nav.Link href="#about">About</Nav.Link>
  //       </Nav>        
  //     </Navbar.Collapse>
  //   </Navbar>
  // </div>

      <HashRouter>
          <div>          
          <ul className="header">
              <li className="logo">The Salon at Lollipops</li>
              <li className="book-nav"><NavLink to="/book">Book</NavLink></li>
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
