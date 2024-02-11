import { useContext } from "react";
import { createPortal } from "react-dom";
import { Button, Container } from "@components";
import { GameStateContext, GAME_STEPS } from "@providers/GameState";
import { ControlsWrap } from "./controls.style";

type GameControlsProps = {
  handleGameReset: () => void;
  score: number;
};

const GameControls = ({ handleGameReset, score }: GameControlsProps) => {
  const [state, setState] = useContext(GameStateContext);

  const handlePlayersResetClick = () => {
    setState({
      ...state,
      step: GAME_STEPS.ENROLL,
    });
  };

  const gameInfoText = `PLAYER: ${state[state.activePlayer]}, SCORE: ${score}`;

  const content = (
    <ControlsWrap gap={20}>
      <Container>{gameInfoText}</Container>
      <Button onClick={handlePlayersResetClick}>reset players</Button>
      <Button onClick={handleGameReset}>reset game</Button>
    </ControlsWrap>
  );

  const headerRef = document.getElementById("HeaderControls") || document.body;

  return createPortal(content, headerRef);
};

export default GameControls;
