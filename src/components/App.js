import React, {Component} from 'react';
import Game from './Game';
import Header from './Header';
// import Info from './Info';


 class App extends Component {
       render() {
        // const history = this.state.history;
        // const current =history[history.length -1];
        // const winner = determineTheWinner(squares) 
        //   let status;
        //   if (winner) {
        //           status = "winner is :" + winner; 
        
        //   }else {
        //           status ="Next player is " + (this.state.xisNext ? "X":"O") ;
        //   }
        
          return (
            <React.Fragment>
            <div className="info">
                 <Header/>
                 <Game/> 
         
             </div>
            </React.Fragment>
            );
          }
        }
  
 export default App;
