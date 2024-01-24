import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";
import DiceProvider from "./Context/DiceContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartGame />,
    },
    {
      path: "/dicerole",
      element: <GamePlay />,
    },
  ]);

  return (
    <DiceProvider>
      <RouterProvider router={router} />
    </DiceProvider>
  );
}

export default App;
