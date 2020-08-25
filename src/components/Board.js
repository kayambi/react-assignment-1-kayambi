// react class component 
import React from 'react';
import Cell from './Cell';

export  default class Board extends React.Component { 
        // adding a constructor to  the board's initial state to contain anarray
        //  of 9 nulls corresponding to the squares
        constructor (props){ 
                super(props)
                this.state = {
                        squares:Array(9).fill(null),
                        xisNext:true,
                }

        }
        handleClick(i){
                //  create a copy of the squares to be modified instead of modifying the original
                // using slice() method
                const newSquares = this.state.squares.slice();
                      if (determineTheWinner(newSquares) || newSquares[i]){
                              alert("you can't play there , try a differnt way")
                              return;
                      } 
                       newSquares[i] = this.state.xisNext ? "X":"O" ;
        // Save new outcome of squares clicked  to the existing cells data
                       this.setState ({
                               squares : newSquares,
                               xisNext : !this.state.xisNext,
                });
        }
        // Square should be rendered and attach an event listiners to it.
        renderSquare(i){
                return <Cell value ={this.state.squares[i]} 
        // a fuction that square can call when clicked  
                        onClick = {() => this.handleClick(i)}
                        />
        }

        render(){
         // Detetmine the player who wins the game  
        const winner = determineTheWinner(this.state.squares) 
        let status;
        if (winner){
                status = "Winner is :" + winner;
        }else {
                status = "next player" + (this.state.xisNext ? "X":"O");
        }
      return ( 

        // Render all the squares  
      <div className="container">
        <div className="status">{status}</div>
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

             //   helper function 
             function determineTheWinner(squares) {
                const lines = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [2, 4, 6],
                ];
                for (let i = 0; i < lines.length; i++) {
                  const [a, b, c] = lines[i];
                  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                  }
                }
                return null;
              }
