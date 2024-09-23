import { ComponentProps, FC } from "react";
import { StyledText, StyledTextType } from "./styledText";

type TextProps = StyledTextType &
  ComponentProps<"p"> & {
    children: React.ReactNode;
  };

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
