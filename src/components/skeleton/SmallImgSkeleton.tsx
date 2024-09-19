import { FC } from "react";
import styled from "styled-components";

type BoxProps = {
  widht: string;
  height: string;
  radius?: string;
};

const Container = styled.div`
  padding: 16px;
  background: red;
  height: 130px;
  display: flex;
  width: 100%;
`;

const Box = styled.div<BoxProps>`
  width: ${(props) => props.widht};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background: blue;
`;

export const SmallImgSkeleton: FC = () => {
  return (
    <Container>
      <Box widht="50px" height="50px" />
      {/* <Container>
        <Box widht="50px" height="50px" />
        <Box widht="50px" height="50px" />
        <Box widht="50px" height="50px" />
      </Container> */}
      <Box widht="50px" height="50px" />
    </Container>
  );
};
