import React, {Component} from 'react';
// import { import } from '@babel/types';
import logo from '../images/logo.png';  // import logo main header
import '../index.css';


class Header extends Component {
   
    constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("clicke happened")
    }
  render(){
  return( 
    // Fragment eleminate the need to  wrapp every component into div
    <React.Fragment> 
        <div className="main-header">
        {/* render logo main header */}
        <img src={logo} alt="Logo" />
        {/* main header */}
            <div>
                 <h1>TICTOCTOE</h1>
            </div>
        {/* button  start */}
            <button onClick = {this.handleClick}>Start</button>     
        </div>
        {/* <Info/> */}
      
     </React.Fragment>
  );
  }
}
export default Header;
