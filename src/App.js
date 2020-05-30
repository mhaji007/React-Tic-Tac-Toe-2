import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      board:Array(9).fill(null),
      player: "X"
    }
  }

  handleClick = (index) => {
    console.log(index)
    
    let newBoard =[...this.state.board]
    newBoard[index] = this.state.player

    let newPlayer = this.state.player === "X" ? "O" : "X";

    this.setState({
      board: newBoard,
      player: newPlayer
    })
  }

    render() {
      const Box = this.state.board.map((box,index) => <div className="box" onClick={() =>this.handleClick(index)} key={index}>{box}</div>)
        return (
            <div className="container">
                <h1>
                    Tic Tac Toe App
                </h1>
                <div className="board">
                  {Box}
                </div>
            </div>
        );
    }
}

export default App;
