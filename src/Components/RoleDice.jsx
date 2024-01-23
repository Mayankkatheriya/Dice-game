import styled from "styled-components";
import { useDiceContext } from "../Context/DiceContext";

const RoleDice = () => {
    const { state, dispatch } = useDiceContext();
    const { selectedDice, currentDice } = state;

    const rollDice = () => {
        if(!selectedDice){
            dispatch({type: "setError", payload: "You have not selected any number"})
            return
        }
        dispatch({type: "setError", payload: ""})
        const random = Math.floor(Math.random()*(6) + 1)
        dispatch({type: "Dice-Role", payload: random})
        if(selectedDice===random) {
            dispatch({type: "updateScore", payload: random})
        }
        else {
            dispatch({type: "updateScore", payload: -1})
        }
        dispatch({ type: "Dice-Selected", payload: "" })
    }


  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    width: 150px;
  }

  .dice img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 24px;
  }
`;