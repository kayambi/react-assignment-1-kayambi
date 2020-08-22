
import React from 'react';
import '../index.css';
class Info extends React.Component{
  constructor(props) {
    super(props)
    this.state = { 
           firstName: null,
           secondName:null

    }
  }
   handleSubmit =(event)=>{
     event.PreventDefault() 
   }
   handleInputChange= (event) =>{
     event.PreventDefault()
     console.log(event)
     console.log(even.target.name)
   }
  render(){
    const {firstName} = this.state,
    const{secondName} = this.state

    // JSX
    return(
      <div> 
        <h1> Enter your  Name</h1>
        <p> firstName:{firstName}</p>
        <p> secondName:{secondName}</p>

        <form onSubmit = {this.handleSubmit}>
          <p><input className="fName" type="text" placeholder ="yourname" name="firstName" onChange="{this.handleInputChange}" /></p>
          <p><input className="lName" type="text" placeholder ="Secondname" name="secondName" /></p>
          <p><button>Start Game</button></p>
        </form>
      </div>
    )
  }
}
export default Info;

