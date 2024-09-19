import { FC } from "react";
import { StyledSpan, StyledSpanType } from "./styledSpan";

type SpanProps = StyledSpanType & {
  children: React.ReactNode;
};

export const Span: FC<SpanProps> = ({ children, ...props }) => {
  return <StyledSpan {...props}>{children}</StyledSpan>;
};
