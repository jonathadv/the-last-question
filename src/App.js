import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Last Question</h1>
        </header>
            <Countdown targetDate={new Date(2061,4,21)}/>
        <p className="counter-text">
            are left until <a href="https://en.wikipedia.org/wiki/The_Last_Question" target="_blank"><i>The Last Question</i></a> is asked for the first time.
        </p>
        <p class="quote">
          "The last question was asked for the first time, half in jest, on May 21, 2061, at a time when humanity first stepped in to the light."
        </p>

      </div>
    );
  }
}

export default App;
