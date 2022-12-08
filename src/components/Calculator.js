import React, { useState } from 'react';
import Calculate from '../logic/calculate';

function MyCalculator() {
  const [state, setTheState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const PutNumber = (event) => setTheState(
    (state) => Calculate(state, event.target.value),
  );
  const { total, next, operation } = state;
  return (
    <div className="calculator-container">
      <div className="calculator-div">
        <div className="display-screen" id="display">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <button type="button" className="item-ac item-items" value="AC" onClick={PutNumber}>AC</button>
        <button type="button" className="item-plus-minus item-items" value="+/-" onClick={PutNumber}>+/-</button>
        <button type="button" className="item-modulus item-items" value="%" onClick={PutNumber}>%</button>
        <button type="button" className="item-multiply item-controls" value="÷" onClick={PutNumber}>÷</button>
        <button type="button" className="item-7 item-items" value="7" onClick={PutNumber}>7</button>
        <button type="button" className="item-8 item-items" value="8" onClick={PutNumber}>8</button>
        <button type="button" className="item-9 item-items" value="9" onClick={PutNumber}>9</button>
        <button type="button" className="item-multiply item-controls" value="x" onClick={PutNumber}>x</button>
        <button type="button" className="item-4 item-items" value="4" onClick={PutNumber}>4</button>
        <button type="button" className="item-5 item-items" value="5" onClick={PutNumber}>5</button>
        <button type="button" className="item-6 item-items" value="6" onClick={PutNumber}>6</button>
        <button type="button" className="item-minus item-controls" value="-" onClick={PutNumber}>-</button>
        <button type="button" className="item-1 item-items" value="1" onClick={PutNumber}>1</button>
        <button type="button" className="item-2 item-items" value="2" onClick={PutNumber}>2</button>
        <button type="button" className="item-3 item-items" value="3" onClick={PutNumber}>3</button>
        <button type="button" className="item-plus item-controls" value="+" onClick={PutNumber}>+</button>
        <button type="button" className="item-0 zero item-items" value="0" onClick={PutNumber}>0</button>
        <button type="button" className="item-dot item-items" value="." onClick={PutNumber}>.</button>
        <button type="button" className="item-equals item-controls" value="=" onClick={PutNumber}>=</button>
      </div>
    </div>
  );
}

export default MyCalculator;
