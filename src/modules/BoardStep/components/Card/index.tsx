import {
  BoardCardBack,
  BoardCardFront,
  BoardCardInner,
  BoardCardWrapper,
} from "./card.style";

type BoardCardProps = {
  expended: boolean;
  matched: boolean;
  imageSrc: string;
  id: string;
  onClick: () => void;
};

const BoardCard = ({ expended, onClick, imageSrc }: BoardCardProps) => {
  return (
    <BoardCardWrapper onClick={onClick}>
      <BoardCardInner $expended={expended}>
        <BoardCardFront></BoardCardFront>
        <BoardCardBack
          direction="column"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></BoardCardBack>
      </BoardCardInner>
    </BoardCardWrapper>
  );
};

export default BoardCard;
