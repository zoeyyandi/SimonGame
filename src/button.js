import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: 3px solid black;
  color: #ff0000;
  font-size: 20pt;
  &:focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt orange;
  }
  &:active {
    transform: translateY(2px);
  }
`;


export const Button = props => {

const handleStartClick = e => {
  props.startGame ? props.startGame() : props.makeStrict()
}

  return (
    <Btn
      onClick={handleStartClick}
      style={{
        backgroundColor: props.color,
        width: props.width,
        borderRadius: props.radius,
        height: props.height
      }}
    />
  );
};
