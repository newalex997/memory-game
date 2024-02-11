import styled, { css } from "styled-components";
import { Container } from "@components";

const commonSidesCSS = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: ${({ theme }) => theme.spacing(3)};
`;

export const BoardCardInner = styled(Container)<{ $expended: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  transform: ${({ $expended }) => ($expended ? "rotateY(180deg)" : "none")};
`;

export const BoardCardWrapper = styled(Container)`
  border-radius: ${({ theme }) => theme.spacing(3)};
  width: calc(100% / 6 - ${({ theme }) => theme.spacing(2.5)});
  aspect-ratio: 1/1;
  cursor: pointer;
  max-height: 50%;
`;

export const BoardCardFront = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.pink};

  ${commonSidesCSS}
`;

export const BoardCardBack = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.white};
  color: ${({ theme }) => theme.palette.primary.gray};
  padding: ${({ theme }) => theme.spacing(3)};
  transform: rotateY(180deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${commonSidesCSS}
`;
