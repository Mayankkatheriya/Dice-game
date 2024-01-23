import styled from "styled-components";
import { useDiceContext } from "../Context/DiceContext";
const NumberSelector = () => {
  const { state, dispatch } = useDiceContext();
  const { selectedDice } = state;
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((number, idx) => {
          return (
            <Box
              key={idx}
              isselected={number === selectedDice}
              onClick={() =>
                dispatch({ type: "Dice-Selected", payload: number })
              }
            >
              {number}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
