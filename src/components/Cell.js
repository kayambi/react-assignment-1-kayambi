import React from 'react';
import '../index.css';

function Cell (props){ 
  return(
    <button className="col square" onClick={props.onClick}>
      {props.value}
    </button>
  )

}
export default Cell;