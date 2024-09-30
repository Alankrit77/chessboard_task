import { useState } from "react";
import "./App.css";
import Chessboard from "./Chessboard";

function App() {
  const [boardSize, setBoardSize] = useState(8);

  return (
    <div>
      Chessboard
      <Chessboard size={boardSize} />
    </div>
  );
}

export default App;
