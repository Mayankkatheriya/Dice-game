import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = () => {
  const navigate = useNavigate()
  return (
        <Container>
      <div>
        <img src="/diceBG.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={() => navigate("/dicerole")}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;



  .content {
    text-align: right;
    h1 {
      font-size: 5.5rem;
      white-space: nowrap;
    }
  }
`;