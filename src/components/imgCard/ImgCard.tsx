import { FC } from "react";

import { BookMark } from "../../assets";
import { Container } from "../container/Container";
import { Button } from "../button/Button";

import styles from "./imgCard.module.scss";

type ImgCardProps = {};

export const ImgCard: FC<ImgCardProps> = () => {
  return (
    <div className={styles.card}>
      <img src="" alt="" className={styles.card__img} />
      <Container variant="flex-container" className={styles.card__inf}>
        <div className={styles.card__inf_text}>
          <p className={styles.img_name}>Charles V, bust length...</p>
          <p className={styles.img_author}>Giovanni Britto</p>

          <p className={styles.img_status}>Public</p>
        </div>
        <Button>
          <BookMark />
        </Button>
      </Container>
    </div>
  );
};
