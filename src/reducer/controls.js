import { TYPES } from '../types';

const INITIAL_STATE = {
  roundCount: null,
  strictMode: false,
  isStarted: false,
  isTurnedOn: false
};

const controls = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.updateRoundCount:
      return { ...state, roundCount: payload };
    case TYPES.toggleStrictMode:
      return { ...state, strictMode: payload };
    case TYPES.toggleStart:
      return { ...state, isStarted: !state.isStarted };
    case TYPES.toggle:
      return { ...state, isTurnedOn: payload };
    default:
      return state;
  }
};

export default controls;
