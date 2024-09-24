import styled from "styled-components";

type ContainreVariant =
  | "container"
  | "flex-container"
  | "grid-container"
  | "loader"
  | "img-card"
  | "header"
  | "search-box";

export type ContainerStyledProps = {
  padding?: string;
  margin?: string;
  display?: string;
  alignitems?: string;
  gap?: string;
  background?: string;
  variant?: ContainreVariant;
  justifycontent?: string;
};

export const StyledContainer = styled.div<ContainerStyledProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  gap: ${(props) => props.gap};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  ${(props) => {
    switch (props.variant) {
      case "flex-container":
        return `
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        `;
      case "grid-container":
        return `
        position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
        `;
      case "container":
        return `
          position: relative;
          max-width: 1260px;
          width: 100%;
          margin: 0 auto;
          padding: 0 10px;
        `;
      case "loader":
        return `
          width: 100%;
          height: 100%;
          position: absalut;

          display: flex;
          align-items: center;
          justify-content: center;
        `;
      case "img-card":
        return `
            width: 334px;
            height: 132px;
            position: absalut;
  
            display: flex;
            align-items: center;
            justify-content: space-between;
          `;
      case "header":
        return `
            padding: 32px 0;
            background:linear-gradient(
            90deg,
            #343333 16.73%,
            #484848 58.63%,
            #282828 98.63%);
          `;
      case "search-box":
        return `
            max-width: 620px;
            max-height: 300px;
            overflow-y: scroll;
            background: #d3d3d3;
            position: absolute;
            top: 140px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 10px;
            padding: 10px;
            z-index: 10;
      `;
    }
  }};
`;
