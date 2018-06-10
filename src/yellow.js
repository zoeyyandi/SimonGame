import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  updateCurrentInput
} from './actions';
import {playSound} from './utility'

const mapDispatchToProps = {
  updateCurrentInput
}


const mapStateToProps = state => ({
  isStarted: state.controlButtons.isStarted
});

const Wrapper = styled.div`
  width: 23vw;
  height: 38vh;
  border: 15px solid black;
  border-radius: 1px 100% 1px 1px;
  background-color: #ffcc00;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

class Yellow extends Component {

  handleOnClick = e => {
    if(this.props.isStarted) {
      playSound(1)
      this.props.updateCurrentInput(2)
    }
  }

  render() {
    return (
      <Wrapper onClick={this.handleOnClick}/> 
    )
  }
}
export const YellowSection =  connect(mapStateToProps, mapDispatchToProps)(Yellow);
