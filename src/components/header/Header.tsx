import { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BookMark, HomeIcon, MuseumLogo } from "@/assets";

import { Container, Text } from "..";

export const Header: FC = () => {
  const [isHome, setHome] = useState<React.ReactNode | undefined>(<HomeLink />);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" ? setHome(<HomeLink />) : setHome("");
  }, [location]);

  return (
    <>
      <Container variant="header">
        <Container variant="container">
          <Container variant="flex-container">
            <Link to={"/"}>
              <MuseumLogo />
            </Link>

            <Container display="flex" alignitems="center" gap="16px">
              {isHome}
              <Container
                display="flex"
                alignitems="center"
                gap="5px"
                onClick={() => navigate("/favorites")}
              >
                <BookMark />
                <Text variant="header" cursor="pointer">
                  Your favorites
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

const HomeLink = () => {
  const navigate = useNavigate();
  return (
    <Container
      display="flex"
      alignitems="center"
      gap="5px"
      onClick={() => navigate("/")}
    >
      <HomeIcon />
      <Text variant="header" cursor="pointer">
        Home
      </Text>
    </Container>
  );
};
