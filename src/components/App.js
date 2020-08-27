import React, {Component} from 'react';
// import Game from './Game';
import Header from './Header';
// import Info from './Info';
import Game from './Game';


 class App extends Component {
       render() {
          return (
            <React.Fragment>
            <div className="info">
                 <Header/>
                 
                 {/* <Info/> */}
               
                 {/* <Info/> */}
             </div>
            </React.Fragment>
            );
          } 
        }
  
 export default App;
