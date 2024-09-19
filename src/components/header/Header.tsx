import { Link, useLocation, useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Container } from "../container/Container";
import { BookMark, HomeIcon, MuseumLogo } from "../../assets";

import styles from "./header.module.scss";

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
              <div
                className={styles.header__favorites_item}
                onClick={() => navigate("/favorites")}
              >
                <BookMark />
                Your favorites
              </div>
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
    <div
      onClick={() => navigate("/")}
      className={styles.header__favorites_item}
    >
      <HomeIcon />
      Home
    </div>
  );
};
