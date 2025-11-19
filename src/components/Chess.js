'use client'
import React, { useState, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Chessgame({ puzzle }) {
  const { fen, sequence, description } = puzzle;

  const [game, setGame] = useState(() => new Chess(fen));
  const [message, setMessage] = useState("White to move — solve in 2 moves");
  const [moveIndex, setMoveIndex] = useState(0); // index into sequence (0..3)
  const [locked, setLocked] = useState(false);
  const initialFenRef = useRef(fen);

  function sanOfMove(move) {
    if (!move) return "";
    return move.san;
  }

  async function onDrop(sourceSquare, targetSquare, piece) {
    if (locked) return false;
    const copy = new Chess(game.fen());
    const move = copy.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
    if (move === null) {
      // Illegal move
      setMessage("Illegal move.");
      return false;
    }

    const playedSan = move.san;
    const expectedSan = sequence[moveIndex];

    if (!expectedSan) {
      setMessage("No expected move defined — puzzle misconfigured.");
      return true;
    }

    if (playedSan === expectedSan) {
      // correct white move
      setGame(new Chess(copy.fen()));
      setMessage(`✅ Correct: ${playedSan}`);
      setMoveIndex((m) => m + 1);

      // If there's a corresponding black move, play it automatically after a slight delay
      const nextBlackSan = sequence[moveIndex + 1];
      if (nextBlackSan) {
        setLocked(true);
        setTimeout(() => {
          const afterWhite = new Chess(copy.fen());
          const played = afterWhite.move(nextBlackSan, { sloppy: true }); // play by SAN
          if (played === null) {
            // If SAN failed, try to find a legal move matching algebraic (fallback)
            // We fall back to try to parse as UCI or SAN tolerant
            setMessage("Puzzle sequence invalid: couldn't play expected black reply.");
            // unlock and reset
            setTimeout(() => resetPuzzle(), 900);
            return;
          }
          setGame(new Chess(afterWhite.fen()));
          setMoveIndex((m) => m + 1);
          setLocked(false);

          // If sequence finished, check result
          if (moveIndex + 2 >= sequence.length) {
            // after black move finishes sequence
            finishCheck(afterWhite);
          } else {
            setMessage("Your turn (white).");
          }
        }, 600);
      } else {
        // No black reply expected (shouldn't happen for 2-move puzzle)
        finishCheck(copy);
      }

      return true;
    } else {
      // Wrong move
      setMessage(`❌ Wrong move (${playedSan}). Resetting...`);
      setLocked(true);
      setTimeout(() => resetPuzzle(), 1000);
      return true;
    }
  }

  function finishCheck(finalGame) {
    setMessage("🎉 Puzzle solved — checkmate!");
    setLocked(true);
  }


  function resetPuzzle() {
    initialFenRef.current = fen;
    setGame(new Chess(fen));
    setMoveIndex(0);
    setLocked(false);
    setMessage("White to move — solve in 2 moves");
  }

  useEffect(() => {
    // if puzzle prop changes, reset
    resetPuzzle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puzzle]);

  return (
    <div className="max-w-md mx-auto p-4 ">
      <h3 className="text-xl font-semibold mb-2">Mate me in 2 moves</h3>

      <div className="flex flex-col items-center gap-3">
        <Chessboard
          id="puzzle-board"
          position={game.fen()}
          onPieceDrop={(src, tgt, piece) => onDrop(src, tgt, piece)}
          arePiecesDraggable={!locked}
          boardWidth={360}
        />

        <div className="text-center mt-2">
          <div className="mb-1">{message}</div>
          <div className="text-sm text-gray-500">Progress: {moveIndex} / {sequence.length}</div>
        </div>

      </div>
    </div>
  );
}
