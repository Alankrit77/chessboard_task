import React, { useState } from "react";

const ChessboardGround = ({ color }) => {
  //   console.log("row", row);
  //   console.log("col", color);
  const [isClicked, setIsClicked] = useState(false);

  const clickedOnBoard = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      //   style={{
      //     backgroundColor: isBlack ? "black" : "white",
      //   }}
      className={`chess-squre ${color} ${isClicked ? "clicked" : ""}`}
      onClick={clickedOnBoard}
    ></div>
  );
};

export default ChessboardGround;
