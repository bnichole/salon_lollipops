import React, { Component } from "react";
import stylist1 from './Images/AboutPageStylist1.jpg';
import stylist2 from './Images/AboutPageStylist2.jpg';
import stylist3 from './Images/AboutPageStylist3.jpg';
 
class About extends Component {
  render() {
    return (
      <div className="about">        
        <div class="row"> 
          <div class="column">
          <img className="responsive" src={stylist1} height={250} width={250}/>
          <img className="responsive" src={stylist2} height={250} width={250}/>
          <img className="responsive" src={stylist3} height={250} width={250}/>
          </div>          
        </div>
        <p className="footer"> 
        About Us
        <br></br> 
        _________________________________<br></br>

        <br></br> 
        
        <br></br>Tiramisu cookie carrot cake tiramisu cupcake jelly beans lollipop biscuit. Tiramisu bear claw cake toffee dessert lollipop liquorice wafer. 
        Icing tootsie roll sugar plum bear claw croissant. Jujubes lollipop chocolate cake. Danish marzipan croissant sweet roll marzipan. 
        Wafer caramels candy pudding pudding cake icing jujubes topping. Gingerbread chocolate oat cake sweet. 
        Sugar plum croissant jelly-o apple pie chupa chups sweet roll. Tiramisu cake muffin jujubes sugar plum chocolate marshmallow. 
        Cake biscuit sesame snaps brownie sweet apple pie.<br></br>

        Tiramisu cookie carrot cake tiramisu cupcake jelly beans lollipop biscuit. Tiramisu bear claw cake toffee dessert lollipop liquorice wafer. 
        Icing tootsie roll sugar plum bear claw croissant. Jujubes lollipop chocolate cake. Danish marzipan croissant sweet roll marzipan. 
        Wafer caramels candy pudding pudding cake icing jujubes topping. Gingerbread chocolate oat cake sweet. 
        Sugar plum croissant jelly-o apple pie chupa chups sweet roll. Tiramisu cake muffin jujubes sugar plum chocolate marshmallow. 
        Cake biscuit sesame snaps brownie sweet apple pie.<br></br>

        Tiramisu cookie carrot cake tiramisu cupcake jelly beans lollipop biscuit. Tiramisu bear claw cake toffee dessert lollipop liquorice wafer. 
        Icing tootsie roll sugar plum bear claw croissant. Jujubes lollipop chocolate cake. Danish marzipan croissant sweet roll marzipan. 
        Wafer caramels candy pudding pudding cake icing jujubes topping. Gingerbread chocolate oat cake sweet. 
        Sugar plum croissant jelly-o apple pie chupa chups sweet roll. Tiramisu cake muffin jujubes sugar plum chocolate marshmallow. 
        Cake biscuit sesame snaps brownie sweet apple pie.<br></br>

        
        </p>
      </div>
    );
  }
}
 
export default About;