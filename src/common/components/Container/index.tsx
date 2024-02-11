import { HTMLAttributes, ReactNode } from "react";
import { StyledContainer } from "./container.style";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  gap?: number;
  direction?: "row" | "column";
};

const Container = ({
  children,
  direction: flexDirection,
  gap,
  style,
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer {...props} style={{ flexDirection, gap, ...style }}>
      {children}
    </StyledContainer>
  );
};

export default Container;
