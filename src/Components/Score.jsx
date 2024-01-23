import React, { useEffect } from "react";
import styled from "styled-components";
import { useDiceContext } from "../Context/DiceContext";

const Score = () => {
    const { state } = useDiceContext();
    const { totalScore } = state;
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default Score;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
