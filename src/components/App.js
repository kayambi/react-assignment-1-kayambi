import React, {Component} from 'react';
// import Info from './Info';
import Header from './Header';
// import './index.css';
import Game from './Game';

 class App extends Component {
       render() {
          return (
            <React.Fragment>
            <div className="info">
                 {/* <h1>Hello I wil do it better {this.props.name}</h1>
                 <p>Another Name {this.props.name}</p> */}
                 {/* Calling Game Components */}
                 <Game/>  
                 {/* Calling Info Component */}
                 {/* <Info/> */}
                 {/* Calling Header Component */}
                 <Header/>
.            </div>
            </React.Fragment>
            );
          }

        }
  
 export default App;
