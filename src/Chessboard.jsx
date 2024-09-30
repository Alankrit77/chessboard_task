import React from "react";
import ChessboardGround from "./ChessboardGround";
import "./Chessboard.css";

const Chessboard = ({ size }) => {
  const board = [];

  for (let row = 0; row < size; row++) {
    const chessboard = [];
    for (let col = 0; col < size; col++) {
      const isBlack = (row + col) % 2 === 0;
      const color = isBlack ? "black" : "white";
      chessboard.push(<ChessboardGround key={`${row}-${col}`} color={color} />);
    }

    board.push(
      <div className="chess-row" key={row}>
        {chessboard}
      </div>
    );
  }

  return <div className="chess-board">{board}</div>;
};

export default Chessboard;
