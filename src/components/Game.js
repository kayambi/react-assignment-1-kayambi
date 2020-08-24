import React, {Component}  from 'react';
import Board from './Board'; 
// import Header from './Header';


export default class  Game extends Component { 
// adding a constructor to  the Game  initial state to contain an array
  constructor (props){
    super(props)
    this.state = { 
      history:[{
        squares:Array(9).fill(null),
      }],
      xIsNext:true,
    }
  }
  handleClick(i){
    const history  = this.state.history;
    const current =history[history.length-1];
    
// Showing the past moves 

const winner
   
    //  create a copy of the squares to be modified instead of modifying the original
    // using slice() method and the take the turns between two players 
    const squares = current.squares.slice()

    // once there is a winner the game must be stoped
    if (determineTheWinner(squares) || squares[i]){
            return;
    }
           squares[i] = this.state.xisNext ? "X": "O";
    //        Save new outcome of squares clicked  to the existing squares data
           this.setState ({ 
               history:history.concat([{
               squares:squares,
               }]),
               xisNext:!this.state.xisNext,
    });
}

render(){ 

const history = this.state.history;
const current =history[history.length -1];
const winner = determineTheWinner(current.squares) 
const moves = history.map(step,move)=>{
        const desc =move ? 'go to move # ' + move : 'go to game start '
}
  let status;
  if (winner) {
          status = "winner is :" + winner; 

  }else {
          status ="Next player is " + (this.state.xisNext ? "X":"O") ;
  }

  return( 
        <div className="game">
        <div className="game-board">
            <Board  
            squares={current.squares}
            OnClick ={(i) => this.handleClick(i)}  
            />

         </div>
         <div className="game-info"> 
         <div>{status}</div>
         <ol>
           {/* {Todo} */}
         </ol>
         </div>
         </div>
         );
  }
}
