import { Link, useLocation, useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { BookMark, HomeIcon, MuseumLogo } from "../../assets";

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
      <Container
        padding="32px 0"
        background="linear-gradient(
        90deg,
        #343333 16.73%,
        #484848 58.63%,
        #282828 98.63%
      )"
      >
        <Container variant="container">
          <Container variant="flex-container">
            <Link to={"/"}>
              <MuseumLogo />
            </Link>

            <Container display="flex" alignItems="center" gap="16px">
              {isHome}
              <Container
                display="flex"
                alignItems="center"
                gap="5px"
                onClick={() => navigate("/favorites")}
              >
                <BookMark />
                <Text
                  fontSize="18px"
                  fontWeight="400"
                  color="var(--light-color)"
                  cursor="pointer"
                >
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
      alignItems="center"
      gap="5px"
      onClick={() => navigate("/")}
    >
      <HomeIcon />
      <Text
        fontSize="18px"
        fontWeight="400"
        color="var(--light-color)"
        cursor="pointer"
      >
        Home
      </Text>
    </Container>
  );
};
