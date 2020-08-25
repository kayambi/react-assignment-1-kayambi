import React, {Component}  from 'react';
import Board from './Board'; 
// import Info from './Info';
// import Header from './Header';
export default class  Game extends Component { 
// adding a constructor to  the Game  initial state to contain an array
    //  constructor(props){
    //    super(props)
    //    this.state = {
    //      history:[{
    //        squares:Array(9).fill(null),
    //      }],
    //      xisNext : true,
    //    };
    //  }
    //  handleClick(i){
      //  create a copy of the squares to be modified instead of modifying the original
      // using slice() metho
      // const history = this.state.history;
      // const current = history[history.length -1];
      // const newSquares = current.squares.slice();
      // // once the player winn the game the game other buttons will be disabled until user refresh the page

      //       if (determineTheWinner(newSquares) || newSquares[i]){
      //               alert("the game is over, restart the game")
      //               return;
      //       } 
      //        newSquares[i] = "X";

      //         // Save new outcome of squares clicked  to the existing cells data
      //        this.setState ({
      //                history:history.concat([{
      //                  squares:newSquares
      //                }]),
      //                xisNext: !this.state.xisNext,
      // })
    //  }
    render(){ 
      // const history = this.state.history;
      // const current = history[history.length -1];
      // const winner = determineTheWinner(current.squares);
      // let  status;
      //      if (winner){
      //        status = "winner: " + winner;

      //      }else {
      //        status = "Next player" + (this.state.xisNext ? "X":"O");
      //      } 
            return( 
                  <div className="game">
                  <div className="game-board">
                      {/* <Info/> */}
                      <Board 

                      // squares={current.squares}
                      // OnClick = {(i) => this.handleClick(i)}  

                      />
                  </div>
                  <div className="game-info"> 
                  {/* <div className="status">{status}</div> */}
                  {/* <ol>{moves}</ol> */}
                  </div>
                  </div>
                  );
  }
}
