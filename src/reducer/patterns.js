import { TYPES } from '../types';

const INITIAL_STATE = {
  patterns: {
    '21': [1, 2, 3, 4],
    '22': [1, 2, 3, 3, 4]
  },
  // userInputs: {
  //   '21': [1, 2, 3, 4],
  //   '22': [1, 2, 3, 3, 4]
  // },
  currentPattern: [],
  currentInput: [],

};

const patterns = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.updateCurrentPattern:
      return { ...state, currentPattern: [...state.currentPattern, payload] };
    case TYPES.updateCurrentInput:
      return { ...state, currentInput: [...state.currentInput, payload] };
    default:
      return state;
  }
};

export default patterns;
