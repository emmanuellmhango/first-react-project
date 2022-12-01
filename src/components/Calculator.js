import React from 'react';
import Calculate from '../logic/calculate';

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.PutNumber = this.PutNumber.bind(this);
  }

  PutNumber = (e) => {
    const operations = ['+', '-', 'x', '%', '÷'];
    const newVal = e.target.value;
    const stateVal = this.state;
    const betterVal = stateVal.next === null ? 0 : stateVal.next;
    if (operations.includes(newVal)) {
      const result = Calculate(stateVal, newVal);
      if (result.total !== null && result.next === null) {
        this.setState(
          {
            total: result.total,
            next: null,
            operation: newVal,
          },
        );
      } else {
        this.setState(
          {
            total: betterVal,
            next: null,
            operation: newVal,
          },
        );
      }
    } else if (newVal === '=') {
      if (stateVal.next === null) {
        if (stateVal.total !== null) {
          this.setState(
            {
              total: stateVal.total,
              next: null,
              operation: null,
            },
          );
        } else {
          this.setState(
            {
              total: null,
              next: null,
              operation: null,
            },
          );
        }
      } else if (stateVal.total === null && stateVal.next !== null) {
        this.setState(
          {
            total: null,
            next: stateVal.next,
            operation: null,
          },
        );
      } else {
        const result = Calculate(stateVal, newVal);
        this.setState(
          {
            total: result.total,
            next: null,
            operation: null,
          },
        );
      }
    } else if (newVal === 'AC') {
      this.setState(
        {
          total: null,
          next: null,
          operation: null,
        },
      );
    } else if (newVal === '+/-') {
      const result = Calculate(stateVal, newVal);
      if (result.total !== null && result.total < 1) {
        this.setState(
          {
            total: result.total,
          },
        );
      }
      if (result.next !== null && result.next < 1) {
        this.setState(
          {
            next: result.next,
          },
        );
      }
    } else {
      const newStateVal = parseInt(betterVal === 0 ? newVal : `${betterVal}${newVal}`, 10);
      this.setState(
        {
          next: newStateVal,
        },
      );
    }
  }

  render() {
    const { total, next, operation } = this.state;
    let answer = null;
    if (total === null && next !== null) {
      answer = next;
    } else if (total !== null && next === null) {
      answer = total;
    } else if (total !== null && next !== null) {
      answer = next;
    } else {
      answer = 0;
    }

    return (
      <div className="calculator-container">
        <div className="calculator-div" id={operation}>
          <div className="display-screen" id="display">{ answer }</div>
          <button type="button" className="item-ac item-items" value="AC" onClick={this.PutNumber}>AC</button>
          <button type="button" className="item-plus-minus item-items" value="+/-" onClick={this.PutNumber}>+/-</button>
          <button type="button" className="item-modulus item-items" value="%" onClick={this.PutNumber}>%</button>
          <button type="button" className="item-multiply item-controls" value="÷" onClick={this.PutNumber}>÷</button>
          <button type="button" className="item-7 item-items" value="7" onClick={this.PutNumber}>7</button>
          <button type="button" className="item-8 item-items" value="8" onClick={this.PutNumber}>8</button>
          <button type="button" className="item-9 item-items" value="9" onClick={this.PutNumber}>9</button>
          <button type="button" className="item-multiply item-controls" value="x" onClick={this.PutNumber}>x</button>
          <button type="button" className="item-4 item-items" value="4" onClick={this.PutNumber}>4</button>
          <button type="button" className="item-5 item-items" value="5" onClick={this.PutNumber}>5</button>
          <button type="button" className="item-6 item-items" value="6" onClick={this.PutNumber}>6</button>
          <button type="button" className="item-minus item-controls" value="-" onClick={this.PutNumber}>-</button>
          <button type="button" className="item-1 item-items" value="1" onClick={this.PutNumber}>1</button>
          <button type="button" className="item-2 item-items" value="2" onClick={this.PutNumber}>2</button>
          <button type="button" className="item-3 item-items" value="3" onClick={this.PutNumber}>3</button>
          <button type="button" className="item-plus item-controls" value="+" onClick={this.PutNumber}>+</button>
          <button type="button" className="item-0 zero item-items" value="0" onClick={this.PutNumber}>0</button>
          <button type="button" className="item-dot item-items" value="." onClick={this.PutNumber}>.</button>
          <button type="button" className="item-equals item-controls" value="=" onClick={this.PutNumber}>=</button>
        </div>
      </div>
    );
  }
}

export default MyCalculator;
