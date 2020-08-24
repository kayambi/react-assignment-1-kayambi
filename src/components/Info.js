// Import needed dependncies 
import React from 'react';
import '../index.css';
import logo from '../images/1.png'; 
import logo1 from '../images/0.png'; 





export default class Info extends React.Component{
  constructor(props) {
    super(props)
    this.state = { 
           Player_1:" ",
           Player_2:" "
    }
  }

  //  Create a function for submitting data

   handleSubmit = (event)=>{
     event.PreventDefault()
     const data = this.state
     console.log(data) 
   }
  //  creating event handle Input change
   handleInputChange= (event) =>{
     event.preventDefault()
     this.setState({
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value
     })
   }
  render(){
    const {Player_1} = this.state
    const {Player_2} = this.state

    // JSX
    return(
      <div> 
        <h1> EnterName</h1>
        <form onSubmit = {this.handleSubmit}>
              <div className ="form-row ">
                <div className="col-6">
                          <p> Name <img className="img1" src={logo} alt="Logo"/><strong>{Player_1}</strong></p>
                          <p><input className="form-control" type="text" placeholder ="" value ={Player_1}  name="Player_1" onChange={this.handleInputChange}/></p>
                </div>
                <hr></hr>
                  <div className="col-6">
                           <p> Name  <img className="img1" src={logo1} alt="Logo"/><strong>{Player_2}</strong></p>
                           <p><input className="form-control" type="text" placeholder ="" name="Player_2" onChange={this.handleInputChange} /></p>
                  <div>
                   </div>
                 <p className="align-items-center"><button>Start Game</button></p>
              </div>
           </div>
        </form>
      
      </div>
    )
  }
}


