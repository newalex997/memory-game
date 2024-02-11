import { useContext } from "react";
import { GameStateContext, GAME_STEPS } from "@providers/GameState";
import { FinalStepWrap } from "./final.style";
import { Button } from "@components";

const FinalStep = () => {
  const [state, setState] = useContext(GameStateContext);

  const handleRestartGame = () => {
    setState({
      ...state,
      step: GAME_STEPS.GAME,
    });
  };

  return (
    <FinalStepWrap direction="column" gap={20}>
      <h2>Congratulations!</h2>
      <h4>{state[state.activePlayer]} you win the game!</h4>
      <Button onClick={handleRestartGame}>play again</Button>
    </FinalStepWrap>
  );
};

export default FinalStep;
