import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  .img {
    width: 100%;
    max-width: 600px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    text-align: center;

    h1 {
      font-size: 3.5rem;
      white-space: nowrap;
    }

    @media screen and (min-width: 768px) {
      text-align: right;

      h1 {
        font-size: 5.5rem;
      }
    }
  }
`;

const StartGame = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="img">
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
