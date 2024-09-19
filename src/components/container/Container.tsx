import { ComponentProps, ComponentPropsWithRef, FC } from "react";
import { ContainerStyledProps, StyledContainer } from "./containerStyled";

type ContainerPorps = ComponentProps<"div"> &
  ComponentPropsWithRef<"div"> &
  ContainerStyledProps & {
    children: React.ReactNode;
  };

export const Container: FC<ContainerPorps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
