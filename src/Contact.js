import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import call from './Images/ContactPageBackground.jpg';
import email from './Images/ContactPageBackground.jpg';
import address from './Images/ContactPageBackground.jpg';
import facebook from './Images/001-facebook.png';
import instagram from './Images/011-instagram.png';
import youtube from './Images/008-youtube.png';
import twitter from './Images/013-twitter.png';
import brick from './Images/ContactPageBackground.jpg';
 
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="img-responsive"> 
        <h1>Contact Us<br></br>___________________</h1>
        <div class="row"> 
            <div class="column">
              <svg width="60" height="60" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.8525 40.1123C59.0906 35.7485 60.2518 31.1494 56.5895 27.0898C48.3711 15.59 42.8439 8.47849 39.377 5.05377C32.7861 -1.45706 21.9437 -0.576371 16.2355 5.04821C13.1695 8.06922 12.1315 9.10665 8.98343 12.3042C-8.55188 29.8489 2.14206 66.9379 30.5705 95.3942C58.9924 123.844 96.0778 134.544 113.65 116.962C116.555 114.161 119.015 111.701 120.954 109.65C126.548 103.738 127.398 93.3736 120.917 86.6405C117.595 83.1886 110.814 77.9283 98.8301 69.3563C95.1598 66.0743 90.808 66.7856 86.8183 69.4032C84.8991 70.6622 83.5024 71.9359 80.8652 74.5758L76.0762 79.3674C75.4454 79.9986 66.8804 75.7092 58.5662 67.3869C50.2475 59.06 45.9611 50.4945 46.5889 49.8668C47.8836 48.5722 49.481 46.9739 51.3813 45.0718C52.218 44.2343 52.618 43.8288 53.131 43.2896C54.1998 42.1663 55.0847 41.1469 55.8525 40.1123ZM84.9092 88.2063L89.6991 83.4137C91.1506 81.9608 92.0912 81.0675 92.8564 80.4516C103.354 87.9904 109.434 92.7307 111.917 95.311C113.408 96.8602 113.177 99.687 111.881 101.057C110.087 102.953 107.757 105.285 104.897 108.043C93.5339 119.41 63.5977 110.773 39.4054 86.5573C15.2055 62.3336 6.57258 32.3928 17.8495 21.1097C20.9849 17.9253 21.9783 16.9324 25.0005 13.9545C26.1337 12.8379 29.2203 12.5872 30.5988 13.9489C33.268 16.5856 38.2192 22.9253 45.5027 33.0712C45.1257 33.5393 44.6547 34.0683 44.0816 34.6707C43.661 35.1128 43.3106 35.468 42.5444 36.2349C40.6456 38.1355 39.0497 39.7323 37.7568 41.0251C29.6121 49.1691 36.5484 63.0299 49.7294 76.2238C62.9013 89.4087 76.7672 96.3527 84.9092 88.2063ZM73.3454 0.934471C100.366 4.20971 121.791 25.635 125.067 52.6558L112.72 54.7135C110.336 32.9487 93.0524 15.6649 71.2876 13.281L73.3454 0.934471ZM69.227 25.6381C85.7365 27.1147 98.8853 40.2635 100.362 56.773L87.9758 58.8374C87.4502 47.5818 78.4182 38.5498 67.1626 38.0242L69.227 25.6381Z" fill="black"/>
              </svg>
              <h3>336.383.1868</h3>
            </div>
            <div class="column">
              <svg width="80" height="80" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 18.75H131.25C138.154 18.75 143.75 24.3464 143.75 31.25V118.75C143.75 125.654 138.154 131.25 131.25 131.25H18.75C11.8464 131.25 6.25 125.654 6.25 118.75V31.25C6.25 24.3464 11.8464 18.75 18.75 18.75ZM18.75 60.1132V118.75H131.25V60.1158L74.9998 88.2409L18.75 60.1132ZM18.75 46.1375L75.0001 74.2654L131.25 46.1404V31.25H18.75V46.1375Z" fill="black"/>
              </svg>
              <h3>hello@lollipops.com</h3>
            </div>
          </div>
          <div class="row">
              <svg width="80" height="80" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8042 62.5L74.3125 24.9917L111.821 62.5H111.811V125H36.8105V62.5H36.8042ZM24.3105 74.9937L15.0825 84.2217L6.25 75.3892L65.4812 16.1581C70.3586 11.2806 78.2664 11.2806 83.1438 16.1581L142.375 75.3892L133.543 84.2217L124.311 74.9897V125C124.311 131.904 118.714 137.5 111.811 137.5H36.8105C29.9069 137.5 24.3105 131.904 24.3105 125V74.9937Z" fill="black"/>
              </svg>
              <h3>The Salon at Lollipops 1302 Glenwood Avenue Greensboro, NC 27403</h3>
          </div> 
        </div>
        <p className="footer"> 
          <h2>Check us out on Social Media</h2><br></br>
          <br></br>
          <div class="row"> 
            <div class="column">
              <img className="responsive" src={facebook} alt="facebook" />
              <img className="responsive" src={instagram} alt="instagram" />
              <img className="responsive" src={twitter} alt="twitter" />
              <img className="responsive" src={youtube} alt="youtube" />
            </div>
          </div>
          <br></br> <br></br> <br></br> 
          Icons made by Freepik from www.flaticon.com 
          
        </p>

      </div>
    );
  }
}
 
export default Contact;