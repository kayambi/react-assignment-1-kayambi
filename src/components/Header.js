import React, {Component} from 'react';
// import { import } from '@babel/types';
import logo from '../images/logo.png';  // import logo main header
import '../index.css';
import Info from './Info';

class Header extends Component {
// const Header = (props) => {
  runFunc =() =>{
    this.setState=()=> {
     return <Info/>
    }
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
            <button onClick ={this.runFunc}>Start</button>     
        </div>
        {/* <Info/> */}
      
     </React.Fragment>
  );
  }
}
export default Header;
