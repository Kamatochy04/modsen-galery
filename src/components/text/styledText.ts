import styled from "styled-components";

type TextVariant = "header" | "main-title";

export type StyledTextType = {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  cursor?: string;
  textalign?: string;
  width?: string;
  margin?: string;
  variant?: TextVariant;
};

export const StyledText = styled.p<StyledTextType>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textalign};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  ${(props) => {
    switch (props.variant) {
      case "header":
        return `
          font-weight: 400;
          font-size: 16px;
          color: #fff;`;
      case "main-title":
        return `
          font-size: 64px;
          font-weight: 700;
          color: #393939;
          text-align:center;
          width: 684px;
          margin:0 auto;
        `;
    }
  }}
`;
