import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";
import { useDiceContext } from "../Context/DiceContext";

const DialogBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.521);
`;

const RulesDialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  z-index: 1000;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
    margin-bottom: 1rem;
  }
`;

const Dialog = () => {
  const { dispatch } = useDiceContext();

  return (
    <DialogBox>
      <RulesDialog>
        <h2>How to play dice game</h2>
        <div className="text">
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </p>
          <p>if you get wrong guess then 1 point will be dedcuted </p>
        </div>
        <Button onClick={() => dispatch({ type: "toggleRulesDialog" })}>
          Close
        </Button>
      </RulesDialog>
    </DialogBox>
  );
};

export default Dialog;
