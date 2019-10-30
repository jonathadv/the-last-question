import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

        <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet"/>

          <h1 className="App-title">> THE LAST QUESTION</h1>

        </header>
            <Countdown targetDate={new Date(2061,4,21)}/>
            <p className="counter-text">
            left for <a href="https://en.wikipedia.org/wiki/The_Last_Question" target="_blank"><i class="no-underline">The Last Question</i></a> to be asked for the first time.
        </p>
        <p className="quote">
          "The last question was asked for the first time, half in jest, on May 21, 2061, at a time when humanity first stepped in to the light."
        </p>
          <p className="answer">INSUFFICIENT DATA FOR MEANINGFUL ANSWER.<span className="blink">|</span></p>
      </div>
    );
  }
}

export default App;
