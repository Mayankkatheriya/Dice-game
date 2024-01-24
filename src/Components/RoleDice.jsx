import React from "react";
import styled from "styled-components";
import { useDiceContext } from "../Context/DiceContext";

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

  @media screen and (max-width: 600px) {
    margin-top: 24px;

    .dice {
      width: 120px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const RoleDice = () => {
  const { state, dispatch } = useDiceContext();
  const { selectedDice, currentDice } = state;

  const rollDice = () => {
    if (!selectedDice) {
      dispatch({
        type: "setError",
        payload: "You have not selected any number",
      });
      return;
    }

    dispatch({ type: "setError", payload: "" });
    const random = Math.floor(Math.random() * 6) + 1;
    dispatch({ type: "Dice-Role", payload: random });

    if (selectedDice === random) {
      dispatch({ type: "updateScore", payload: random });
    } else {
      dispatch({ type: "updateScore", payload: -1 });
    }

    dispatch({ type: "Dice-Selected", payload: "" });
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import { useDiceContext } from "../Context/DiceContext";

// const RoleDice = () => {
//   const { state, dispatch } = useDiceContext();
//   const { selectedDice, currentDice } = state;
//   const [rolling, setRolling] = useState(false);

//   const rollDice = () => {
//     if (!selectedDice) {
//       dispatch({ type: "setError", payload: "You have not selected any number" });
//       return;
//     }
//     dispatch({ type: "setError", payload: "" });
//     setRolling(true);

//     // Simulate rolling by updating the dice face every 100 milliseconds
//     const rollInterval = setInterval(() => {
//       const random = Math.floor(Math.random() * 6) + 1;
//       dispatch({ type: "Dice-Role", payload: random });
//     }, 100);

//     // Stop rolling after 1.5 seconds
//     setTimeout(() => {
//       clearInterval(rollInterval);
//       const random = Math.floor(Math.random() * 6) + 1;
//       dispatch({ type: "Dice-Role", payload: random });
//       setRolling(false);
//       console.log(selectedDice, currentDice);

//       // Compare the current dice value with the selected number and update the score
//       if (selectedDice === currentDice) {
//         dispatch({ type: "updateScore", payload: selectedDice });
//       } else {
//         dispatch({ type: "updateScore", payload: -1 });
//       }

//       dispatch({ type: "Dice-Selected", payload: "" });
//     }, 1500);
//   };

//   return (
//     <DiceContainer>
//       <RollingDice rolling={rolling} onClick={rolling ? null : rollDice}>
//         <img src={`/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
//       </RollingDice>
//       <p>Click on Dice to roll</p>
//     </DiceContainer>
//   );
// };

// const rollAnimation = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// const DiceContainer = styled.div`
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   p {
//     font-size: 24px;
//   }
// `;

// const RollingDice = styled.div`
//   cursor: ${(props) => (props.rolling ? "not-allowed" : "pointer")};
//   width: 150px;
//   animation: ${(props) => (props.rolling ? rollAnimation : "none")} 1.5s infinite linear;

//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export default RoleDice;
