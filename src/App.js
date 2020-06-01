import React, {Component} from 'react';
import './App.css';
import Player from './components/ChoosePlayer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      board:Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  checkWinner = () => {
    let winLines = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]

    for (let index=0; index<winLines.length; index++) {
      const [a,b,c] = winLines[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[b] === this.state.board[c]){
        alert('You won!')
        this.setState({
        winner: this.state.player
          })
      }
    }

  }


  

  handleClick = (index) => {
    if(this.state.player && !this.state.winner) {


      let newBoard = this.state.board
      //let newBoard =[...this.state.board] this line messes up the winning logic for some reason
      console.log(index)
      
      if (!this.state.board[index]){
        newBoard[index] = this.state.player
    
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
    
        this.checkWinner();
      }

    }
    

  }

  setPlayer(player) {
    this.setState({
      player
    })
  }

    render() {
      const Box = this.state.board.map((box,index) => <div className="box" onClick={() =>this.handleClick(index)} key={index}>{box}</div>)
        return (
            <div className="container">
                <h1>
                    Tic Tac Toe App
                </h1>
                <Player player={(e) => this.setPlayer(e)}/>
                <div className="board">
                  {Box}
                </div>
            </div>
        );
    }
}

export default App;
