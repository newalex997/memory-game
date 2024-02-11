import { ChangeEvent, useContext } from "react";
import { Button, Input } from "@components";
import {
  GAME_STEPS,
  PLAYER_TYPES,
  GameStateContext,
} from "@providers/GameState";
import { EnrollStepWrap } from "./enroll.style";

const EnrollUser = () => {
  const [state, setState] = useContext(GameStateContext);

  const canStartGame = state[PLAYER_TYPES.FIRST] && state[PLAYER_TYPES.SECOND];

  const handleStartGameClick = () => {
    if (!canStartGame) return;

    setState({
      ...state,
      step: GAME_STEPS.GAME,
    });
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [target.name]:
        target.type === "number" ? Number(target.value) : target.value,
    });
  };

  return (
    <EnrollStepWrap direction="column" gap={20}>
      <h2>Welcome!</h2>
      <Input
        label="first player name"
        name={PLAYER_TYPES.FIRST}
        onChange={handleInputChange}
        value={state[PLAYER_TYPES.FIRST]}
      />
      <Input
        label="second player name"
        name={PLAYER_TYPES.SECOND}
        onChange={handleInputChange}
        value={state[PLAYER_TYPES.SECOND]}
      />
      <Input
        label="difficulty"
        name="difficulty"
        type="number"
        min={2}
        max={10}
        step={2}
        onChange={handleInputChange}
        value={state.difficulty}
      />
      <Button disabled={!canStartGame} onClick={handleStartGameClick}>
        start the game
      </Button>
    </EnrollStepWrap>
  );
};

export default EnrollUser;
