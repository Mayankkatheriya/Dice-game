import React from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useDiceContext } from "../Context/DiceContext";
import { Button } from "../Styled/Button";
import Dialog from "./Dialog";

const GamePlay = () => {
  const { state, dispatch } = useDiceContext();
  const { error, isRulesDialogOpen } = state;
  return (
    <MainContainer>
      <p className="error">{error}</p>
      <div className="top_section">
        <Score />
        <NumberSelector />
      </div>
      <RoleDice />
      <div className="btns">
        <Button onClick={() => dispatch({ type: "resetScore" })}>
          Reset Score
        </Button>
        <Button onClick={() => dispatch({ type: "toggleRulesDialog" })}>
          Show Rules
        </Button>
      </div>
      {/* Rules Dialog */}
      {isRulesDialogOpen && <Dialog />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 3rem 2rem 0;
  width: 100%;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem 0;
  }

  .error {
    color: red;
    text-align: right;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    .btns {
      margin-top: 20px;
    }
  }
`;
