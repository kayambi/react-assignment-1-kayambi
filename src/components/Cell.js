import React from 'react';
import '../index.css';

// User or the player once he/ she click on each cell there will be turn between x and O ;
// class Cell extends React.Component{
//   render(){
//   return (
//         <button className=" col square " 
//                 onClick={this.props.onClick}>
//                  {this.props.value}
//         </button>
//   )}
// }



function Cell (props){ 
  return(
    <button className =" col square" onClick={props.onClick}>
      {props.value}
    </button>
  )

}
export default Cell;
