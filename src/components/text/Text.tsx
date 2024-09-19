import { FC } from "react";
import { StyledText, StyledTextType } from "./styledText";

type TextProps = StyledTextType & {
  children: React.ReactNode;
};

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
