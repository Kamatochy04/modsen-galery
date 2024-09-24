import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { BookMark } from "@/assets";
import { ImgDataForWorks, useData, useImgService } from "@/utils";

import { Container, Button } from "..";

import styles from "./imgCard.module.scss";

export const ImgCard: FC<ImgDataForWorks> = ({
  id,
  thumbnail,
  title,
  date_qualifier_title,
  artist_titles,
}) => {
  const navigate = useNavigate();

  const { addImgToFavorites } = useImgService();
  const { setImgId } = useData();

  const toImgInf = (id: number) => {
    setImgId(id);
    navigate(`/${id}`);
  };

  const handelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addImgToFavorites({
      id,
      thumbnail,
      title,
      date_qualifier_title,
      artist_titles,
    });
  };

  return (
    <div className={styles.card}>
      <img
        src={thumbnail.lqip}
        alt={thumbnail.alt_text}
        className={styles.card__img}
        onClick={() => toImgInf(id)}
      />
      <Container variant="img-card" className={styles.card__inf}>
        <div className={styles.card__inf_text}>
          <p className={styles.img_name}>{title}</p>
          {artist_titles.map((item, id) => {
            return (
              <p key={id} className={styles.img_author}>
                {item}
              </p>
            );
          })}

          <p className={styles.img_status}>{date_qualifier_title}</p>
        </div>
        <Button onClick={handelClick}>
          <BookMark />
        </Button>
      </Container>
    </div>
  );
};
