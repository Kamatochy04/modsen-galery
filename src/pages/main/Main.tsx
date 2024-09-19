import { FC } from "react";

import {
  Container,
  ErrorBoundary,
  Galery,
  Input,
  Span,
  Text,
} from "../../components";
import { OtherWorks } from "../otherWorks/OtherWorks";

export const Main: FC = () => {
  return (
    <>
      <Container padding="120px 0">
        <Container variant="container">
          <Text
            fontSize="64px"
            fontWeight="700"
            color="#393939"
            textalign="center"
            width="684px"
            margin="0 auto"
          >
            let's find some <Span color="var(--main-color)">art</Span> here!
          </Text>

          <Input placeholder="Search art, artist, work..." />
        </Container>
      </Container>

      <ErrorBoundary>
        <Galery />
      </ErrorBoundary>

      <OtherWorks />
    </>
  );
};
