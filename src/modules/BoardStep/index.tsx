import { useContext, useEffect, useRef, useState } from "react";
import { getRandomCardPairsPack, update } from "@utils";
import {
  GAME_STEPS,
  PLAYER_TYPES,
  GameStateContext,
} from "@providers/GameState";
import { BoardContent, BoardWrapper } from "./board.style";
import { Card, Controls } from "./components";

type PackCardType = {
  expended: boolean;
  matched: boolean;
  imageSrc: string;
  id: string;
};

type CatImageType = {
  url: string;
};

async function requestCatImages(limit: number): Promise<CatImageType[]> {
  const request = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`
  );

  const data = await request.json();

  return data;
}

const Board = () => {
  const timeoutRef = useRef<number>();
  const [state, setState] = useContext(GameStateContext);
  const [cardsPackState, setCardsPackState] = useState<PackCardType[]>([]);
  const [score, setScore] = useState(0);

  const changePlayer = () => {
    const { FIRST, SECOND } = PLAYER_TYPES;

    setState({
      ...state,
      activePlayer: state.activePlayer === FIRST ? SECOND : FIRST,
    });
  };

  const toggleExpendAllCards = (expend: boolean) => {
    setCardsPackState((prevState) =>
      update(prevState, -1, { expended: expend, matched: expend })
    );
  };

  const handleCardClick = (card: PackCardType, cardIndex: number) => {
    if (card.expended) return;

    const matchingCard = cardsPackState.find(({ matched }) => matched);

    clearTimeout(timeoutRef.current);

    // expend current card
    setCardsPackState((prevState) =>
      update(prevState, cardIndex, {
        expended: true,
        matched: true,
      })
    );

    if (!matchingCard) return;

    const isMatch = matchingCard.id === card.id;

    // if is match increment score if not, reset
    setScore((prevScore) => (isMatch ? prevScore + 1 : 0));

    // game moves on
    if (isMatch) {
      setCardsPackState((prevState) =>
        update(prevState, -1, { matched: false })
      );
    } else {
      // game starts again, hide all cards and switch player
      timeoutRef.current = setTimeout(() => {
        toggleExpendAllCards(false);
        changePlayer();
      }, 500);
    }
  };

  const handleStartGame = async () => {
    const catImages = await requestCatImages(state.difficulty);

    const newPackState: PackCardType[] = getRandomCardPairsPack(
      state.difficulty,
      catImages
    );

    setScore(0);
    clearTimeout(timeoutRef.current);

    setCardsPackState(newPackState);
    toggleExpendAllCards(true);

    timeoutRef.current = setTimeout(() => {
      toggleExpendAllCards(false);
    }, 3000);
  };

  useEffect(() => {
    handleStartGame();
  }, []);

  useEffect(() => {
    if (score === state.difficulty) {
      setTimeout(() => {
        setState({ ...state, step: GAME_STEPS.FINAL });
      }, 1000);
    }
  }, [score, state.difficulty]);

  return (
    <BoardWrapper>
      <Controls handleGameReset={handleStartGame} score={score} />
      <BoardContent>
        {cardsPackState.map((card, index) => (
          <Card
            {...card}
            onClick={() => {
              handleCardClick(card, index);
            }}
            key={`${card.id}-${index}`}
          />
        ))}
      </BoardContent>
    </BoardWrapper>
  );
};

export default Board;
