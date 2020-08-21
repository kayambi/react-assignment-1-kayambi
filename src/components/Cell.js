import React from 'react';


export default function Cell (props){
  return (
          <button  className="col-4 square" onClick ={props.onClick}>
                   {props.value}
          </button>
  ) 
}



