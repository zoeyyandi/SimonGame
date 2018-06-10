import React from 'react';
import { connect } from 'react-redux';
import {
  updateRoundCount,
  toggleStrictMode,
  toggleStart,
  toggle
} from './actions';
import { Center } from './center';

const mapStateToProps = state => ({
  roundCount: state.controlButtons.roundCount,
  strictMode: state.controlButtons.strictMode,
  isStarted: state.controlButtons.isStarted,
  isTurnedOn: state.controlButtons.isTurnedOn
});

const mapDispatchToProps = {
  updateRoundCount,
  toggleStrictMode,
  toggleStart,
  toggle
};

const CContainer = props => {
  return <Center {...props} />;
};

export const CenterContainer = connect(mapStateToProps, mapDispatchToProps)(
  CContainer
);
