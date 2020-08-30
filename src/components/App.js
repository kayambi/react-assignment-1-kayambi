import React, {Component} from 'react';
import Header from './Header';
import Game from './Game';


 class App extends Component {
   state ={
     fields:{}
   }
   handleSubmit = (fields)=>{
     this.setState({
           fields
   })
   
     console.log("App got :", fields )

   }

       render() {
          return (
            <React.Fragment>
            <div className="info">
         
                 <Header
                handleSubmit={fields => this.handleSubmit(fields)}/> 
                <p>{JSON.stringify(this.state.fields)}</p> */}
             </div>
            </React.Fragment>
            );
          } 
        }
  
 export default App;
