import React, { Component } from "react";
import { HashRouter as BookingLink } from "react-router-dom";
import beauty from './Images/HomePageBackground.jpg'

import {
  Route,
  NavLink,
  HomeHashRouter
} from "react-router-dom";
import Book from "./Book";
 
class Home extends Component {
  render() {
    return (
      <div className="home"> 
        <div className="responsive">      
          <img className="back" src={beauty} alt="beauty" height={600} width={1000}/> 
          <BookingLink>

          <NavLink to="/book"><button class='btn'>Book Now</button></NavLink>
          <div className="content">
            <Route path="/book" component={Book}/>
          </div>
           
          </BookingLink>       
          

          <p className="footer"> 
          ________________________________________________________<br></br>
          <br></br> 
          The Salon at Lollipops 1302 Glenwood Avenue Greensboro, NC 27403 
          
          </p>
        </div>
      </div>
    );
  }
}
 
export default Home;