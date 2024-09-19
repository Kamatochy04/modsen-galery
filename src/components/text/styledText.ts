import styled from "styled-components";

export type StyledTextType = {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  cursor?: string;
  textAlign?: string;
  width?: string;
  margin?: string;
};

export const StyledText = styled.p<StyledTextType>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;
