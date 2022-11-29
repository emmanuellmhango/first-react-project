import React from 'react';

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-div">
          <div className="display-screen">0</div>
          <div className="item-ac item-items">AC</div>
          <div className="item-plus-minus item-items">+/-</div>
          <div className="item-modulus item-items">%</div>
          <div className="item-multiply item-controls">/</div>
          <div className="item-7 item-items">7</div>
          <div className="item-8 item-items">8</div>
          <div className="item-9 item-items">9</div>
          <div className="item-multiply item-controls">x</div>
          <div className="item-4 item-items">4</div>
          <div className="item-5 item-items">5</div>
          <div className="item-6 item-items">6</div>
          <div className="item-minus item-controls">-</div>
          <div className="item-1 item-items">1</div>
          <div className="item-2 item-items">2</div>
          <div className="item-3 item-items">3</div>
          <div className="item-plus item-controls">+</div>
          <div className="item-0 zero item-items">0</div>
          <div className="item-dot item-items">.</div>
          <div className="item-equals item-controls">=</div>
        </div>
      </div>
    );
  }
}

export default MyCalculator;
