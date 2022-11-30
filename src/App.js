import './App.css';
import React from 'react';
import MyCalculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyCalculator />
        </header>
      </div>
    );
  }
}

export default App;
