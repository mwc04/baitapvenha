// import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   //prors
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board(prors) {
//   //prors
//   console.log({ prors });
//   const { xIsNext, squares, onPlay } = prors;

//   // const [xIsNext, setXIsNext] = useState(true);

//   //squares biến đầu lưu giá trị ,setSquares biến thứ hai lưu hàm truyền vào,ô có 9 nên truyền vào array 9 giá trị
//   // const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   // const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   console.log({ history, currentSquares });

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//     // setXIsNext(nextMove % 2 === 0);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = "Go to move #" + move;
//     } else {
//       description = "Go to game start";
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// import React, { useState } from "react";
// import "./style.css";

// export default function Button() {
//   const [buttons, setButtons] = useState([]);
//   const [inputValue, setInpuvalue] = useState(" ");
//   const [firstbutton, setFirstbutton] = useState(" ");

//   function Inputchange(i) {
//     setInpuvalue(i.target.value);
//   }

//   function add() {
//     if (inputValue !== " ") {
//       if (buttons.length < 10) {
//         if (buttons.length === 0) {
//           setFirstbutton(inputValue);
//         }
//         setButtons([...buttons, inputValue]);
//         setInpuvalue(" ");
//       }
//     }
//     // const newButton = (
//     //   <button key={buttons.length + 1}>{buttons.length + 1}</button>
//     // );
//     // setButtons([...buttons, newButton]);
//   }

//   function deleteButton() {
//     if (buttons.length > 0) {
//       if (buttons.length === 1) {
//         setFirstbutton(" ");
//       }
//       setButtons((tru_button) => tru_button.slice(0, tru_button.length - 1));
//     }

//     // const updatedButtons = [...buttons];
//     // updatedButtons.pop();
//     // setButtons(updatedButtons);
//   }

//   function Total() {
//     const sum = buttons.reduce(
//       (total, currenValue) => total + Number(currenValue),
//       0
//     );
//     return sum;
//   }

//   return (
//     <>
//       <div>
//         <input type=" text" value={inputValue} onChange={Inputchange} />
//         <button className="buttonAdd" onClick={add}>
//           Add
//         </button>
//         <button
//           className="buttonDelete"
//           onClick={deleteButton}
//           disabled={buttons.length === 0}
//         >
//           Delete
//         </button>
//         {buttons.map((buttonId) => (
//           <button key={buttonId}>{buttonId}</button>
//         ))}
//       </div>

//       <div>
//         <p className="buttonTotal">Total:{Total()}</p>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import "./style.css";

export default function Button() {
  const [inputs, setInputs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function add() {
    const newInput = {
      id: inputs.length + 1,
      value: inputValue,
    };
    setInputs([...inputs, newInput]);
    setInputValue("");
  }

  function Delete() {
    const updatedInputs = [...inputs];
    updatedInputs.pop();
    setInputs(updatedInputs);
  }

  function Total() {
    let sum = 0;
    inputs.forEach((input) => {
      const inputValue = parseInt(input.value, 10);
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
    });
    return sum;
  }

  function handleChange(e, inputId) {
    const updatedInputs = inputs.map((input) => {
      if (input.id === inputId) {
        return {
          ...input,
          value: e.target.value,
        };
      }
      return input;
    });
    setInputs(updatedInputs);
  }

  return (
    <>
      <div>
        <button
          className="addButton"
          onClick={add}
          disabled={inputs.length === 10}
        >
          Add
        </button>
        <button
          className="deleteButton"
          onClick={Delete}
          disabled={inputs.length === 1}
        >
          Delete
        </button>
      </div>
      <div>
        {inputs.map((input) => (
          <div key={input.id}>
            <input
              type="text"
              value={input.value}
              onChange={(e) => handleChange(e, input.id)}
            />
          </div>
        ))}
      </div>
      <div>
        <p className="inputTotal">Total: {Total()}</p>
      </div>
    </>
  );
}
