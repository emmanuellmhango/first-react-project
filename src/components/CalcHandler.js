import React from 'react';
import Calculator from './Calculator';

const CalcHandler = function () {
  return (
    <div className="spacing calculator-home">
      <div className="calculator-title">
        <p>Lets do some Math</p>
      </div>
      <div className="calculator-box">
        <Calculator />
      </div>
    </div>
  );
};

export default CalcHandler;
