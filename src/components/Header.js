import React, {Component} from 'react';
// import { import } from '@babel/types';
import logo from '../images/logo.png'; 
//  import logo main header
import '../index.css';
import logox from '../images/1.png'; 
import logoO from '../images/0.png'; 
// import Board from './Board';
export default class Header extends Component {
  constructor(){
    super();
    this.state ={NameX:"", NameO:""
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange =({target})=>{
    this.setState({[target.name]: target.value})

  }
  // Use a react hook to get aour updated data to the DOM 
  handleSubmit =(event)=>{ 
    console.log("the first player's Name is:" + this.state.NameX)
  console.log("the second player's Name is:" + this.state.NameO)
    event.preventDefault();
  };
   showForm =()=> {
     return (
       <div>
         <form onSubmit = {this.handleSubmit}>
           <div className="form-row">
           <div className="col">
           <label>Name  <img className="img1" src={logox} alt="Logo"/></label>
           <input type="text"  name="NameX" value={this.state.NameX} onChange={this.handleChange}></input>
           </div>
       
          <div className="col">
          <label>Name <img className="img1" src={logoO} alt="Logo"/></label>
           <input type="text" name="NameO"  value={this.state.NameO} onChange={this.handleChange}></input>
           </div>
           <div>
             <hr/>
          <label> 
          {/* <button type="submit" value="Start Gane"></button> */}
      
             <button className="btn btn-success"  >Start Game</button>
            {/* {this.state.showForm ? this.showForm(): null }      */}
    
          </label>
          </div>
          </div> 
         </form>
       </div>
     )
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
        <div className="mx-auto">
        <button className="btn btn-secondary" onClick ={ () => this.setState({showForm: true})}>Start</button>
            {this.state.showForm ? this.showForm(): null }     
            {/* Buttons to start the game */}
         </div>
        </div>
        {/* <Info/> */}
     </React.Fragment>
  );
  }
}


