'use client'
import React, { useState, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
/**
 * ChessPuzzleAuto
 * - props.puzzle: {
 *     fen: string,                 // starting FEN
 *     sequence: string[],         // SAN sequence: [W1, B1, W2, B2]
 *     description?: string
 *   }
 *
 * Behavior:
 * - User plays white moves by dragging pieces.
 * - On a legal user move we compare the SAN to the expected white SAN.
 *   - If it matches, we auto-play the next black SAN from `sequence`.
 *   - If it doesn't match, mark "Wrong move" and reset after a short timeout.
 * - After the sequence completes we'll show success/failure and lock the board.
 */
export default function Chessgame({ puzzle }) {
  const { fen, sequence, description } = puzzle;

  // sequence example: ["Qh5+", "g6", "Qxg6+", "hxg6"] (real sequence must be valid SANs)
  const [game, setGame] = useState(() => new Chess(fen));
  const [message, setMessage] = useState("White to move — solve in 2 moves");
  const [moveIndex, setMoveIndex] = useState(0); // index into sequence (0..3)
  const [locked, setLocked] = useState(false);
  const initialFenRef = useRef(fen);

  // helper to create SAN string for last move
  function sanOfMove(move) {
    // move is object returned by chess.move
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

    const playedSan = move.san; // e.g. "Nxe5"
    // Expecting white move at even indices 0 and 2
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
    if (finalGame.in_checkmate()) {
      setMessage("🎉 Puzzle solved — checkmate!");
    } else {
      setMessage("Puzzle sequence completed. Not checkmate.");
    }
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
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-lg font-semibold mb-2">Chess puzzle — mate in 2</h3>
      {description && <p className="text-sm text-gray-600 mb-3">{description}</p>}

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

        <div className="flex gap-2 mt-3">
          <button onClick={resetPuzzle} className="px-3 py-1 rounded border">Reset</button>
          <button onClick={() => {
            // reveal full sequence on demand
            setMessage(`Solution: ${sequence.join(", ")}`);
            setLocked(true);
          }} className="px-3 py-1 rounded border">Reveal</button>
        </div>
      </div>
    </div>
  );
}
