import React, {Component} from 'react';

import logo from '../images/logo.png'; 
//  import logo main header
import '../index.css';
import logox from '../images/1.png'; 
import logoO from '../images/0.png'; 
import Game from './Game';
// import Board from './Board';

function HideButtonUponSubmission (props){ 

  if(!props.submit) {
    return null;
  }
  return (
    <div className="submission"> 
       {/* <button>clicked></button> */}

    </div>
  )
}

export default class Header extends Component {
  constructor(){
    super();
    this.state ={
         NameX:" ", 
         NameO:" ",
         showSubmission:true

    }
  this.PlayersNameChange = this.PlayersNameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleTogleClick = this.handleTogleClick.bind(this)
  }
  handleTogleClick() {
    this.setState(prevState =>({
      showSubmission: !prevState.showSubmission
    }));
  }

  PlayersNameChange =({target})=>{  
    this.setState({
      [target.name]:target.value})

  }

  // Use a react hook to get aour updated data to the DOM 
  handleSubmit =(event)=>{ 
    event.preventDefault();
    this.props.handleSubmit(this.state)
    // console.log(this.state.NameX);
    // console.log(this.state.NameO);
  };

   showForm = ()=> {
     return (
       <div>
         <form onSubmit = {this.handleSubmit}>
           <div className="form-row">
           <div className="col-md-6 NameX">
           <label>Name  <img className="img1" src={logox} alt="Logo"/></label>
           <input type="text"  name="NameX" onChange={this.PlayersNameChange}></input>
           </div>
       
          <div className="col-md-6 NameO">
          <label>Name <img className="img1" src={logoO} alt="Logo"/></label>
           <input type="text" name="NameO"  onChange={this.PlayersNameChange}></input>
           </div>
    
          </div> 
          <div className="row button-row">
          <label> 
             <button className="btn btn-success start-button">Start Game</button>
          </label>
          </div>
         </form>
       </div>
     )
     }
    
  render(){
  return( 
    // Fragment eleminate the need to  wrapp every component into div
    <React.Fragment> 
        <div>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
        <div className="main-header ">
        {/* render logo main header */}
        <img src={logo} alt="Logo" />
        {/* main header */}
            <div className="TicHeader">
                 <h1 className="TicToc niceFont">TIC TOC TOE</h1>
            </div>
        <div className="mx-auto main-button start">
        <HideButtonUponSubmission submit={this.state.showSubmission}/>
        <button className="btn btn-secondary " onClick={this.handleTogleClick}>
           {this.state.showSubmission ? "start": this.showForm()}
         </button>
         {/* <button onClick={(()=> this.setState({showForm:true}))}>start 
         {this.state.showForm ? this.showForm(): null}
        </button>  */}
         </div>
        </div> 
        </div>
        {/* <Game/> */}
     </React.Fragment>
  );
  }
}


