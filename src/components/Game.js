import React, {Component}  from 'react';
import Board from './Board'; 
import '../index.css';
import Header from './Header'
export default class  Game extends Component { 

// adding a constructor to  the Game  initial state to contain an array

    render(){ 
            return( 
              <React.Fragment> 
                {/* Name of the players */}
           
                     {/* <Header handleSubmit={fields => this.handleSubmit(fields)} />
                    <p>{JSON.stringify(this.state.fields)}</p> */}

                  

                        {/* <Header handleSubmit={fields => this.handleSubmit(fields)} />
                        <p>{JSON.stringify(this.state.fields)}</p> */}
    

                      {/* start here */} 
                      <div className="d-flex bd-highlight mb-3 ">
                          <div className="mr-auto p-2 bd-highlight">
                               <p>player1</p>
                          </div>
                          <div className="p-2 bd-highlight"> 
                          <p>Player2</p>
                          </div>
                       </div>  
                      {/* end here */}
                      <div className="row">
                      <div className="col-sm-6">
                          {/* Board of the Game  */}
                      <main>
                        <article>
                        <div>
                        <Board/>
                        </div> 
                        </article>
                    </main>
                      </div>
                      </div>
                      <hr/>
                      <div className="d-flex bd-highlight mb-3 ">
                          <div className=" mr-auto p-2 bd-highlight order-0">
                               <button>New Game</button>
                          </div>
                          <div className="p-2 bd-highlight "> 
                                 <button>Reset</button>
                          </div>
                       </div>    
              </React.Fragment>  
                  );
  }
}
