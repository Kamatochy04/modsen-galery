import styled from "styled-components";

type ContainreVariant = "container" | "flex-container" | "grid-container";

export type ContainerStyledProps = {
  padding?: string;
  margin?: string;
  display?: string;
  alignItems?: string;
  gap?: string;
  background?: string;
  variant?: ContainreVariant;
};

export const StyledContainer = styled.div<ContainerStyledProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};

  ${(props) => {
    let styles = "";

    switch (props.variant) {
      case "flex-container":
        styles = `
          display: flex;
          align-items: center;
          justify-content: space-between;

        `;
        break;
      case "grid-container":
        styles = `
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        `;
        break;
      case "container":
        styles = `
          max-width: 1260px;
          width: 100%;
          margin: 0 auto;
          padding: 0 10px;
        `;
        break;
      default:
    }

    return styles;
  }};
`;
