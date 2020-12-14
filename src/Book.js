import React, { Component } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
 
class Book extends Component {
  render() {
    return (
      <div className="book">
        <h1>Book Your Appointment<br></br>___________________________________</h1>  
        
        <Form>
          <div class="row">
            <div class="column">
              <h2>Contact Info</h2>
              <Form.Group controlId="formGridFName">      
                <Form.Label>First Name *</Form.Label> <br></br>
                <input type="text" id="fname" name="fname" placeholder="First name"></input><br></br><br></br>
              </Form.Group>
            
              <Form.Group controlId="formGridLName">
                <Form.Label >Last Name *</Form.Label> <br></br>
                <input type="text" id="lname" name="lname" placeholder="Last name"></input><br></br><br></br>
              </Form.Group>

              <Form.Group controlId="formGridPhone">
                <Form.Label>Phone *</Form.Label> <br></br>
                <input type="tel" id="phone" name="phone" placeholder="123-45-678"></input><br></br><br></br>
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email *</Form.Label> <br></br>
                <input type="email" id="email" name="email" placeholder="username@email.com"></input><br></br><br></br>
              </Form.Group>
            </div>

            <div class="vl"></div>

            <div class="column">
              <h2>Appointment Details</h2>
              <Form.Group controlId="formGridService">      
                    <Form.Label>Select a service </Form.Label> <br></br>
                    <input type="text" id="service" name="service" placeholder="Blow Out" /> <br></br><br></br>
              </Form.Group>
                
              <Form.Group controlId="formGridDate">
                <Form.Label>Select an appointment date</Form.Label> <br></br>
                <input type="date" id="date" name="date" placeholder="12/20/2020" /> <br></br><br></br>
              </Form.Group>

              <Form.Group controlId="formGridStylist">
                <Form.Label>Stylist</Form.Label> <br></br>
                <input type="text" id="stylist" name="stylist" placeholder="Celeste" /> <br></br><br></br>
              </Form.Group>

              <Form.Group controlId="formGridTime">
                <Form.Label>Avaliable Time(s)</Form.Label> <br></br>
                <input type="button" id="time1" name="time1" value="10:00 AM" /> 
                <input type="button" id="time2" name="time2" value="12:00 AM" /> 
                <input type="button" id="time3" name="time3" value="3:00 AM" /> <br></br><br></br>
              </Form.Group> 
            </div>
          
          </div>
        </Form>

        

      </div>
    );
  }
}
 
export default Book;