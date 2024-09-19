import { FC } from "react";

import { BookMark } from "../../assets";
import { Button } from "../button/Button";
import { Container } from "../container/Container";

import styles from "./imgPreview.module.scss";
import { ImgDataForWorks } from "../../utils/model/imgModel";

export const ImgPreview: FC<ImgDataForWorks> = ({
  id,
  thumbnail,
  title,
  date_qualifier_title,
  artist_titles,
}) => {
  return (
    <div className={styles.preview}>
      <Container variant="flex-container">
        <img
          src={thumbnail.lqip}
          alt={thumbnail.alt_text}
          className={styles.preview__img}
        />

        <div className={styles.preview__inf}>
          <p className={styles.preview_name}>{title}</p>
          {artist_titles.map((item) => (
            <p className={styles.preview_author}>{item}</p>
          ))}

          <p className={styles.preview_status}>{date_qualifier_title}</p>
        </div>

        <Button>
          <BookMark />
        </Button>
      </Container>
    </div>
  );
};
