import { useState, useEffect } from "react";
import Square from "./components/Square";
import "./App.css";
import { Patterns } from "./patterns.jsx";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [res, setRes] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkTie();
    isWinning();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (res.state != "none") {
      alert(`Game Over! Winning player: ${res.winner}`);
    }
    restartGame();
  }, [res]);

  const chooseSquare = (sqaure) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == sqaure && val == "") {
          return player;
        }
        return val;
      })
    );
  };

  const isWinning = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      let foundWinPattern = true;
      if (firstPlayer == "") return;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinPattern = false;
        }
      });
      if (foundWinPattern == true) {
        setRes({ winner: player, state: "won" });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setRes({ winner: "No one", state: "tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
