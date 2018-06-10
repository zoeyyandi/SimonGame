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
  border-radius: 1px 1px 100% 1px;
  background-color: #2d42ad;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

class Blue extends Component {

  handleOnClick = e => {
    if(this.props.isStarted) {
      playSound(3)
      this.props.updateCurrentInput(4)
    }
  }

  render() {
    return (
       <Wrapper onClick={this.handleOnClick}/> 
    )
  }
}

export const BlueSection = connect(mapStateToProps, mapDispatchToProps)(Blue);
