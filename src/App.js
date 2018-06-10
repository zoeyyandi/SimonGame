import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import { CenterContainer } from './centerContainer';
import { GreenSection } from './green';
import { RedSection } from './red';
import { BlueSection } from './blue';
import { YellowSection } from './yellow';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.type = 'square';
oscillator.frequency.value = 2500;

oscillator.frequency.setValueAtTime(130.4, audioCtx.currentTime);

oscillator.detune.setValueAtTime(200, audioCtx.currentTime + 1);

class App extends Component {
  // componentDidMount() {
  //   oscillator.start(audioCtx.currentTime);
  //   oscillator.stop(audioCtx.currentTime + 10);
  // }


  render() {
    return (
      <div className="App">
        <div className="topContainer">
          <GreenSection />
          <RedSection />
        </div>
        <div className="bottomContainer">
          <YellowSection />
          <BlueSection />
        </div>
        <CenterContainer />
      </div>
    );
  }
}

export default App;
