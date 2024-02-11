import { Dispatch, SetStateAction } from "react";

export enum GAME_STEPS {
  ENROLL = "enroll",
  GAME = "game",
  FINAL = "final",
}

export enum PLAYER_TYPES {
  FIRST = "playerOne",
  SECOND = "playerTwo",
}

export type GameState = {
  [PLAYER_TYPES.FIRST]: string;
  [PLAYER_TYPES.SECOND]: string;
  step: GAME_STEPS;
  activePlayer: PLAYER_TYPES;
  difficulty: number;
};

export type GameContext = [
  state: GameState,
  setState: Dispatch<SetStateAction<GameState>>
];
