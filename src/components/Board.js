// react class component 
import React, {Component}  from 'react';
import Cell from './Cell'; 

export default class Board extends Component { 
  renderCell(i){
    return <Cell value={this.props.squares[i]}
            onClick={() =>this.props.onClick[i]}
            />
  }
  render(){
      return(
      <div className="container">
        <div className="row">
                {this.renderCell(0)}
                {this.renderCell(1)}           
                {this.renderCell(2)}
        </div>
        <div className="row">
                {this.renderCell(0)}
                {this.renderCell(1)}           
                {this.renderCell(2)}
        </div>
        <div className="row">
                {this.renderCell(0)}
                {this.renderCell(1)}           
                {this.renderCell(2)}
        </div>
      </div>
      )
     }
   
    }
          
