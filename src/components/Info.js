import React, {Component} from 'react';
import '../index.css';

class Info extends Component
{
    playerX = React.createRef();
    playerO = React.createRef();

    handleSubmit = (e) =>
    {
        if(this.playerX.current.value === "" || this.playerO.current.value === "")
          alert("You cannot have empty name(s)!")
        else
          this.props.startGame(this.playerX.current.value, this.playerO.current.value);
    }

    render()
    {
        if (this.props.start && this.props.turn === 0)
            return (
                <div className="player-info row">
                    <div className="form-group col-md-6 set-1">
                        <label htmlFor="player-1" className="game-names">X</label>
                        <input className="form-control" id="player-1" aria-describedby="" placeholder="" type="text" ref={this.playerX} size="25"></input>
                        <small id="" className="form-text text-muted start-btn">Name for player 1.</small>
                    </div>
                    <div className="form-group col-md-6 set-2">
                        <label htmlFor="player-2" className="game-names">O</label>
                        <input className="form-control" id="player-2" aria-describedby="" placeholder="" type="text" ref={this.playerO} size="25"></input>
                        <small id="" className="form-text text-muted start-btn">Name for player 2.</small>
                    </div>
                    <button type="submit" className="btn btn-dark start-btn" onClick={this.handleSubmit}>Start Game</button>
                </div>
            )
        else
            return null
    }
}

export default Info;