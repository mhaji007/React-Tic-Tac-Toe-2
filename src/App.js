import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      board:Array(9).fill(null)
    }
  }

  handleClick = (index) => {
    console.log(index)
    
    let newBoard =[...this.state.board]
    newBoard[index] = "X"

    this.setState({
      board: newBoard
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
