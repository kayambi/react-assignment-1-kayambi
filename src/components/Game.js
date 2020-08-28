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
                   <div className="row">
                      <div className="col-sm-6">

                     {/* <Header handleSubmit={fields => this.handleSubmit(fields)} />
                    <p>{JSON.stringify(this.state.fields)}</p> */}

                      <p className="NameX">X</p>
                  
                      </div>
                      <div className="col-sm-6">

                        {/* <Header handleSubmit={fields => this.handleSubmit(fields)} />
                        <p>{JSON.stringify(this.state.fields)}</p> */}

                        <p className="Name0">0</p>

                        </div>
                      </div>
                      <div className="row">
                      <div className="col-sm-6">
                          {/* Board of the Game  */}
                      <main>
                        <article>
                        <div>
                        <Board/>
                        </div> 
                        </article>
                        {/* <nav>
                        
                        </nav>
                        <hr/>
                        <hr/>
                        <hr/>
                
                        <aside> 
                          <div className="row ">
                          <div>
                          <button className="col-sm-12">Reset</button>
                          </div>
                          <hr/>
                          <hr/>
                          <div>
                          <button className="col-sm-12">Game</button>

                          </div>
                    
                          </div>
                        </aside> */}
                    </main>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <button>New Game</button>
                        </div>
                        <div className="col-md-6">
                          <button>Reset</button>
                        </div>
                      </div>
            
          
              </React.Fragment>  
                  );
  }
}
