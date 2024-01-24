import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Idiot = () => {
  const [playerNumber, setPlayerNumber] = useState(3);
  const [undercoverNumber, setUndercoverNumber] = useState(0);
  const [blankNumber, setBlankNumber] = useState(0);

  const decrementPlayerNumber = () => {
    if (playerNumber > 0) {
      setPlayerNumber(playerNumber - 1);
    }
  };

  const decrementUndercoverNumber = () => {
    if (undercoverNumber > 0) {
      setUndercoverNumber(undercoverNumber - 1);
    }
  };

  const decrementBlankNumber = () => {
    if (blankNumber > 0) {
      setBlankNumber(blankNumber - 1);
    }
  };

  const incrementPlayerNumber = () => {
    setPlayerNumber(playerNumber + 1);
  };

  const incrementUndercoverNumber = () => {
    setUndercoverNumber(undercoverNumber + 1);
  };

  const incrementBlankNumber = () => {
    setBlankNumber(blankNumber + 1);
  };

  return (
    <div>
      <div>
        玩家: {playerNumber}
        <button onClick={decrementPlayerNumber} disabled={playerNumber === 3}>
          -
        </button>
        <button onClick={incrementPlayerNumber}>+</button>
      </div>
      <div>
        臥底: {undercoverNumber}
        <button onClick={decrementUndercoverNumber} disabled={undercoverNumber === 0}>
          -
        </button>
        <button onClick={incrementUndercoverNumber}>+</button>
      </div>
      <div>
        白板: {blankNumber}
        <button onClick={decrementBlankNumber} disabled={blankNumber === 0}>
          -
        </button>
        <button onClick={incrementBlankNumber}>+</button>
      </div>
      <div>
        <Link to="/idiotplay">
          <button>開始</button>
        </Link>
      </div>
      <div>
        <button onClick={() => alert('自創題目 規則')}>
          自創題目
        </button>
      </div>
    </div>
  );
};

export default Idiot;