import styled from "styled-components";

type ContainreVariant =
  | "container"
  | "flex-container"
  | "grid-container"
  | "loader"
  | "img-card";

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
    let styles = "";

    switch (props.variant) {
      case "flex-container":
        styles = `
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        `;
        break;
      case "grid-container":
        styles = `
        position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
        `;
        break;
      case "container":
        styles = `
          position: relative;
          max-width: 1260px;
          width: 100%;
          margin: 0 auto;
          padding: 0 10px;
        `;
        break;
      case "loader":
        styles = `
          width: 100%;
          height: 100%;
          position: absalut;

          display: flex;
          align-items: center;
          justify-content: center;
        `;
        break;
      case "img-card":
        styles = `
            width: 334px;
            height: 132px;
            position: absalut;
  
            display: flex;
            align-items: center;
            justify-content: space-between;
          `;
        break;
      default:
    }

    return styles;
  }};
`;
