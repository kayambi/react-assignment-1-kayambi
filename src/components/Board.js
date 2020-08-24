// react class component 
import React from 'react';
import Cell from './Cell';


class Board extends React.Component { 
        // adding a constructor to  the board's initial state to contain an array

        handleClick(i){
                //  create a copy of the squares to be modified instead of modifying the original
                // using slice() method and the take the turns between two players 
                const squares = this.state.squares.slice();
                // once there is a winner the game must be stoped
                if (determineTheWinner(squares) || squares[i]){
                        return;
                }
                       squares[i] = this.state.xisNext ? "X": "O";
                //        Save new outcome of squares clicked  to the existing squares data
                       this.setState ({ 
                           squares:squares,
                           xisNext:!this.state.xisNext,
                });
        }
        // Square should be rendered and attach an event listiners to it.
        renderSquare(i){
                return (<Cell 
                        value ={this.props.squares[i]} 
                        // a fuction that square can call when clicked  
                        onClick = {()=>this.props.handleClick(i)}
                        />
                );
        }

  render(){
          const winner = determineTheWinner(this.state.squares) 
          let status;
          if (winner) {
                  status = "winner is :" + winner; 

          }else {
                  status ="Next player is " + (this.state.xisNext ? "X":"O") ;
          }

      return( 
      <div className="container"> 
        
        <div className="row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}           
                {this.renderSquare(2)}
        </div>
        <div className="row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}           
                {this.renderSquare(5)}
        </div>
        <div className="row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}           
                {this.renderSquare(8)}
        </div>
      </div>
      )}
    }
    export default Board;
          
function determineTheWinner(squares){
        const lines=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],

        ];
        for (let i=0; i <  lines.length  ; i ++){
                const [a,b,c] = lines[i];
                if (squares[a] && squares[a] ===
                    squares[b] && squares[a]=== squares[c]) {
                            return squares[a];
                    }
        }
        return null;
}
