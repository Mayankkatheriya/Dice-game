import { createContext, useContext, useReducer } from "react";

const DiceContext = createContext();

//contextProvider
const DiceProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Dice-Selected":
        return { ...state, selectedDice: action.payload };
      case "Dice-Role":
        return { ...state, currentDice: action.payload };
      case "updateScore":
        return { ...state, totalScore: state.totalScore + action.payload };
      case "setError":
        return { ...state, error: action.payload };
      case "resetScore":
        return { ...state, totalScore: 0 };
      case "toggleRulesDialog":
        return { ...state, isRulesDialogOpen: !state.isRulesDialogOpen };
      default:
        return state;
    }
  };

  const initState = {
    selectedDice: "",
    currentDice: 1,
    totalScore: 0,
    error: "",
    isRulesDialogOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DiceContext.Provider value={{ state, dispatch }}>
      {children}
    </DiceContext.Provider>
  );
};
export default DiceProvider;

export const useDiceContext = () => {
  return useContext(DiceContext);
};
