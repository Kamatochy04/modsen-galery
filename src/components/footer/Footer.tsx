import { FC } from "react";
import { Link } from "react-router-dom";

import { Container } from "../container/Container";
import { ModsenLogo, MuseumLogoTwo } from "../../assets";

export const Footer: FC = () => {
  return (
    <Container padding="32px 0" background="var(--light-color)">
      <Container variant="container">
        <Container variant="flex-container">
          <Link to={"/"}>
            <MuseumLogoTwo />
          </Link>
          <ModsenLogo />
        </Container>
      </Container>
    </Container>
  );
};
