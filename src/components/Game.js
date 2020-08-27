import React, {Component}  from 'react';
import Board from './Board'; 
import '../index.css';
export default class  Game extends Component { 
// adding a constructor to  the Game  initial state to contain an array
    render(){ 
            return( 
              <React.Fragment> 
                {/* Name of the players */}
                   <div className="row">
                      <div className="col-sm-6">
                      <p className="NameX"> NameX: Musafiri</p>
                      </div>
                      <div className="col-sm-6">
                      <p className="NameO"> NameO: Kayambi</p> 
                      </div>
                     </div>
                     {/* Board of the Game  */}
                      <main>
                        <article>
                        <div>
                        <Board/>
                        </div> 
                        </article>
                        <nav>
                        
                        </nav>
                        <hr/>
                        <hr/>
                        <hr/>
                        {/* Reset and restart buttons*/}
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
                        </aside>
                    </main>
          
              </React.Fragment>  
                  );
  }
}


// <div>
// <Board/>
// </div> 
