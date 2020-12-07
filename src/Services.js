import React, { Component } from "react";
import shampoo from './Images/shampoo.png';
import treatment from './Images/treatment.png';
import blowout from './Images/blowout.png';
import cut from './Images/cut.png';
import flatiron from './Images/flatiron.png';
import color from './Images/color.png';
import { HashRouter as BookServices } from "react-router-dom";

import {
  Route,
  NavLink,
  ServicesHashRouter
} from "react-router-dom";
import Book from "./Book";
 
class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1>Our Services</h1>
         
        <div class="grid-container">
          <div class="grid-item">
            <img className="responsive" src={shampoo} height={75} width={75}/>
            <h3>Shampoo & Condition</h3>
            <p>Soufflé donut pastry. Gingerbread cookie pie. Sweet icing icing toffee brownie donut.</p>
            <p className="cost">$40.00</p>
          </div>
          <div class="grid-item">
            <img className="responsive" src={treatment} height={75} width={75}/>
            <h3>Treatment</h3>
            <p>Sugar plum lemon drops halvah cookie caramels ice cream. Soufflé cotton candy halvah donut gummi bears tiramisu topping.</p>
            <p className="cost">$25.00</p>
          </div>
          <div class="grid-item">
            <img className="responsive" src={blowout} height={75} width={75}/>
            <h3>Blow Out</h3>
            <p>Macaroon liquorice gummies topping. Candy carrot cake sesame snaps. Pastry apple pie cake lollipop chocolate cake cheesecake.</p>
            <p className="cost">$60.00</p>
          </div>  
          <div class="grid-item">
            <img className="responsive" src={cut} height={75} width={75}/>
            <h3>Cut/Trim</h3>
            <p>Pudding caramels bonbon. Pudding chocolate jelly-o brownie. Marzipan cotton candy gummies.</p>
            <p className="cost">$35.00</p>
          </div>
          <div class="grid-item">
            <img className="responsive" src={flatiron} height={75} width={75}/>
            <h3>Flat/Curl Iron</h3>
            <p>Pastry toffee icing. Jelly-o tart oat cake powder sweet pie jelly lemon drops ice cream. Candy caramels cheesecake bonbon.</p>
            <p className="cost">$30.00</p>
          </div>
            <div class="grid-item">
            <img className="responsive" src={color} height={75} width={75}/>
            <h3>Custom Color</h3>
            <p>Chocolate gingerbread pastry jujubes cake. Gummi bears candy lollipop soufflé toffee lollipop.</p>
            <p className="cost">$45.00</p>
          </div>           
        </div>
        <div className="footer">
          <BookServices>
            <NavLink to="/book"><button class='btn'>Book Now</button></NavLink>
            <br></br>                 
            <p>Icons made by Freepik from www.flaticon.com</p> 
            <div className="content">
              <Route path="/book" component={Book}/>
            </div>           
            </BookServices> 
        </div>
          

        {/* <div className="footer"> 
        <button>Book Now</button>
        <br></br>                 
        <p>Icons made by Freepik from www.flaticon.com</p> 
        
        </div> */}

      </div>
    );
  }
}
 
export default Services;