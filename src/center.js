import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { playSound } from './utility';

const Wrapper = styled.div`
  width: 18vw;
  height: 32vh;
  border: 15px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
  background-color: white;
`;

const Header = styled.p`
  font-family: 'Alfa Slab One';
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 3em;
`;

const BtnContainer = styled.div`
  width: 14vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Display = styled.span`
  color: #ff0000;
  background-color: #380008;
  font-family: 'VT323', monospace;
  width: 60px;
  border-radius: 15%;
  height: 36px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const Label = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin: 0;
  margin-left: 20px;
`;
const List = styled.li`
  display: flex;
  margin: 0 1.2vw;
  font-size: 0.5em;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
  padding: 4px 1px 0 1px;
  margin: 5px;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: 0.4s;

  cursor: pointer;
  background-color: #ccc;
  border-radius: 2px

  ${Checkbox}:checked + & {
    background-color: #313131;
  }

  ${Checkbox}:focus + & {
    box-shadow: 0 0 1px #313131;
  }

  &:before {
    position: absolute;
    content: '';
    left: 4px;
    bottom: 4px;
    transition: 0.4s;
    height: 20px;
    width: 20px;
    background-color: #008fe2;
    border-radius: 2px;
    border: 2px solid gray;

    ${Checkbox}:checked + & {
      transform: translateX(24px);
    }
  }
`;

const ToggleLabel = styled.p`
  font-size: 0.5em;
`;

const BottomContainer = BtnContainer.extend`
  width: 10vw;
`;

export const Center = ({
  roundCount,
  strictMode,
  isStarted,
  isTurnedOn,
  updateRoundCount,
  toggleStrictMode,
  toggleStart,
  toggle
}) => {
  const handleOnClick = e => {
    if (isTurnedOn) {
      toggle(false);
      updateRoundCount(null);
    } else {
      updateRoundCount('- -');
      toggle(true);
    }
  };

  const startGame = () => {
    if (isTurnedOn) {
      toggleStart()
      setTimeout(() => {
        updateRoundCount('0 1');
        playSound()
      }, 800);
    }
  };

  const makeStrict = () => {
    if (isTurnedOn) {
      strictMode ? toggleStrictMode(false) : toggleStrictMode(true);
    }
  };

  const name = 'SIMON';

  return (
    <Wrapper className="containerC">
      <Header>{name}</Header>
      <BtnContainer>
        <Display>{roundCount}</Display>
        <Button
          startGame={startGame}
          color="#ff0000"
          width="30px"
          height="30px"
          radius="50%"
        />
        <Button
          makeStrict={makeStrict}
          color="#f8ff00"
          width="30px"
          height="30px"
          radius="50%"
        />
      </BtnContainer>
      <Label>
        <List style={{ padding: '0 30px 0 10px', margin: 0 }}>COUNT</List>
        <List style={{ padding: '0 15px 0 10px', margin: 0 }}>START</List>
        <List style={{ padding: '0 10px 0 10px', margin: 0 }}>STRICT</List>
      </Label>
      <BottomContainer>
        <ToggleLabel>OFF</ToggleLabel>
        <Toggle>
          <Checkbox />
          <Slider onClick={handleOnClick} />
        </Toggle>
        <ToggleLabel>ON</ToggleLabel>
      </BottomContainer>
    </Wrapper>
  );
};
