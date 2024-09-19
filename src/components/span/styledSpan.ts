import styled from "styled-components";

export type StyledSpanType = {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  cursor?: string;
  textAlign?: string;
};

export const StyledSpan = styled.span<StyledSpanType>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textAlign};
`;
