import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  updateCurrentInput
} from './actions';
import {playSound} from './utility'

// const mapStateToProps = state => ({
  
// })

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
  border-radius: 100% 1px 1px 1px;
  background-color: #08570d;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

class Green extends Component {

  handleOnClick = e => {
    if(this.props.isStarted) {
      playSound(0)
      this.props.updateCurrentInput(1)
    }
  }

  render() {
    return( 
      <Wrapper onClick={this.handleOnClick}/> 
    )
  }
}

export const GreenSection =  connect(mapStateToProps, mapDispatchToProps)(Green);



