import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];

  // Check for winner
  const calculateWinner = (squares) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: combination };
      }
    }
    return null;
  };

  // Check if board is full (draw)
  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  // Handle cell click
  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
      setTimeout(() => setShowWinnerModal(true), 500);
    } else if (isBoardFull(newBoard)) {
      setWinner('draw');
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      setTimeout(() => setShowWinnerModal(true), 500);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Reset current game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
    setShowWinnerModal(false);
  };

  // Reset all scores
  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  // Play again (from modal)
  const playAgain = () => {
    resetGame();
  };

  // Render cell
  const renderCell = (index) => {
    const isWinningCell = winningLine.includes(index);
    const cellValue = board[index];

    return (
      <button
        key={index}
        className={`game-cell ${cellValue ? `player-${cellValue.toLowerCase()}` : ''} ${isWinningCell ? 'winning' : ''
          } ${cellValue || winner ? 'disabled' : ''}`}
        onClick={() => handleClick(index)}
        disabled={cellValue !== null || winner !== null}
      >
        {cellValue && <span className="cell-content">{cellValue}</span>}
      </button>
    );
  };

  return (
    <div className="xo-game">
      <div className="game-header">
        <h1 className="game-title">XO Game</h1>
        <p className="game-subtitle">Classic Tic-Tac-Toe with a modern twist</p>
      </div>

      <div className="game-container">
        <div className="game-info">
          <div className="current-player">
            <span>Current Player:</span>
            <div className={`player-indicator player-${isXNext ? 'x' : 'o'}`}>
              {isXNext ? 'X' : 'O'}
            </div>
          </div>

          <div className="score-board">
            <div className="score-item player-x">
              <span className="score-label">Player X</span>
              <span className="score-value">{scores.X}</span>
            </div>
            <div className="score-item draws">
              <span className="score-label">Draws</span>
              <span className="score-value">{scores.draws}</span>
            </div>
            <div className="score-item player-o">
              <span className="score-label">Player O</span>
              <span className="score-value">{scores.O}</span>
            </div>
          </div>
        </div>

        <div className="game-board">
          {board.map((_, index) => renderCell(index))}
        </div>

        <div className="game-controls">
          <button className="game-button primary" onClick={resetGame}>
            New Game
          </button>
          <button className="game-button secondary" onClick={resetScores}>
            Reset Scores
          </button>
        </div>
      </div>

      <footer className="game-footer">
        <p>Made using Google's Antigravity</p>
      </footer>

      {showWinnerModal && (
        <div className="winner-announcement">
          <div className="winner-modal">
            <div className="winner-icon">
              {winner === 'draw' ? '🤝' : '🎉'}
            </div>
            <h2 className={`winner-text ${winner === 'draw' ? 'draw' : `player-${winner.toLowerCase()}`}`}>
              {winner === 'draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
            </h2>
            <p className="winner-subtitle">
              {winner === 'draw'
                ? 'Well played by both players!'
                : `Congratulations! Player ${winner} takes the victory!`}
            </p>
            <div className="modal-buttons">
              <button className="game-button primary" onClick={playAgain}>
                Play Again
              </button>
              <button className="game-button secondary" onClick={resetScores}>
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
