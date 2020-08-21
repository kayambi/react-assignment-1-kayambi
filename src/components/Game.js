import React, {Component}  from 'react';
import Board from './Board'; 


export default class  Game extends Component {
    // Set intial constructor 
    constructor(props){
        super(props) 
        console.log(props);
        this.state ={
            
            xisTheNext:true, // set x as a flag the determine if it X or O time to go
            stepNum: 0, // default value of some number is 0, since  there is not steps at thebegining
            history:[
                {squares:Array(9).fill(null)} // set each item to null because none is playing at the begining

            ]  //saves the history of the steps in the game
        }
    }
    // Create a handle click function that will change the status of each cell every
    // time the user clicks on  it.

handleClick(i){
    const history =this.state.history.slice(0,this.state.stepNum +1);
    const current =history[history.length-1];
    const squares = current.squares.slice();
          squares[i] = this.state.xisTheNext ? "X":"O";
          this.setState ({
              history:history.concat({
                  squares:squares

              }),
              xisTheNext:!this.state.xisTheNext,
              stepNum : history.lenght
          })
}
render(){
    const history =this.state.history;
    const current = history[this.state.stepNum];

  return(
    <div className="game">
    <div className="game-board">
          <Board onClick={(i)=> this.onClick(i)}
            squares ={current.squares}
          />
     </div> 
    </div> 
  );
  }
}
