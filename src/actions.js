import { TYPES } from './types';

export const updateCurrentPattern = pattern => {
  return {
    type: TYPES.updateCurrentPattern,
    payload: pattern
  };
};

export const updateCurrentInput = input => {
  return {
    type: TYPES.updateCurrentInput,
    payload: input
  };
};

export const addPattern = pattern => {
  return {
    type: TYPES.addPattern,
    payload: pattern
  }
}

export const clearPattern = () => {
  return {
    type: TYPES.clearPattern
  }
}

export const updateRoundCount = count => {
  return {
    type: TYPES.updateRoundCount,
    payload: count
  };
};

export const toggleStrictMode = bool => {
  return {
    type: TYPES.toggleStrictMode,
    payload: bool
  };
};

export const toggleStart = () => {
  return {
    type: TYPES.toggleStart
  };
};

export const toggle = bool => {
  return {
    type: TYPES.toggle,
    payload: bool
  };
};
