import React, { Component } from "react";
import { HashRouter as BookingLink } from "react-router-dom";
import beauty from './Images/HomePageBackground.jpg';
import Image from 'react-bootstrap/Image';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

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
        <div className="img-responsive">      
          <Image className="back" src={beauty} alt="beauty" fluid/>
          {/* <div style={{ width: 660, height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/svg+xml" src={beauty} />
            </ResponsiveEmbed>
          </div> */}
          
          <BookingLink>

            <NavLink to="/book"><button class='btn'>Book Now</button></NavLink>
            <div className="content">
              <Route path="/book" component={Book}/>
            </div>
           
          </BookingLink>       
          
        </div>
          <p className="footer"> 
          ________________________________________________________<br></br>
          <br></br> 
          The Salon at Lollipops 1302 Glenwood Avenue Greensboro, NC 27403 
          
          </p>
        
      </div>
    );
  }
}
 
export default Home;