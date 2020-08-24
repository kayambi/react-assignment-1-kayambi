import React, {Component} from 'react';
import Game from './Game';
 class App extends Component {
       render() {
          return (
            <React.Fragment>
            <div className="info">
                 <Game/> 
             </div>
            </React.Fragment>
            );
          }
        }
  
 export default App;
