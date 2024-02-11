import { useContext } from "react";
import { GameStateContext, GAME_STEPS } from "@providers/GameState";
import EnrollUser from "./EnrollStep";
import FinalStep from "./FinalStep";
import Board from "./BoardStep";

const { ENROLL, GAME } = GAME_STEPS;

const RootApp = () => {
  const [state] = useContext(GameStateContext);

  const LayoutContent =
    state.step === ENROLL
      ? EnrollUser
      : (state.step === GAME && Board) || FinalStep;

  return <LayoutContent />;
};

export default RootApp;
