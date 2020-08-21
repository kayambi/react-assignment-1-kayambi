import React, {Component} from 'react';


class Header extends Component {
// const Header = (props) => {
  runFunc =() =>{
    this.setState=({
      open:true
    })
  }
  render(){
  return( 
    // Fragment eleminate the need to  wrapp every component into div
    <React.Fragment> 
        <div className="main-header">
            <h1>TicTocToe 
              <button class="button" onClick ={this.runFunc}>Start</button> 
            </h1>
           
        </div>
     </React.Fragment>
  );
  }
}
export default Header;
