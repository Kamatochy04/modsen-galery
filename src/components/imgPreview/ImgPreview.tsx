import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Button } from "..";

import { ImgDataForWorks, useData, useImgService } from "@/utils";
import { BookMark } from "@/assets";

import styles from "./imgPreview.module.scss";
type ImgPreview = {
  removeImg?: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export const ImgPreview: FC<ImgDataForWorks & ImgPreview> = ({
  id,
  thumbnail,
  title,
  date_qualifier_title,
  artist_titles,
  isFavorite,
  removeImg,
}) => {
  const { addImgToFavorites } = useImgService();

  const { setImgId } = useData();
  const navigate = useNavigate();

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

  const toImgInf = (id: number) => {
    setImgId(id);
    navigate(`/${id}`);
  };

  return (
    <div className={styles.preview}>
      <Container variant="flex-container" onClick={() => toImgInf(id)}>
        <img
          src={thumbnail.lqip}
          alt={thumbnail.alt_text}
          className={styles.preview__img}
        />

        <div className={styles.preview__inf}>
          <p className={styles.preview_name}>{title}</p>
          {artist_titles.map((item, id) => (
            <p key={id} className={styles.preview_author}>
              {item}
            </p>
          ))}

          <p className={styles.preview_status}>{date_qualifier_title}</p>
        </div>
        <div className={styles.buttons}>
          <Button onClick={handelClick}>
            <BookMark />
          </Button>
          {isFavorite ? (
            <button
              className={styles.clouse}
              onClick={(e) => {
                if (removeImg) {
                  removeImg(e, id);
                }
              }}
            >
              Удалить
            </button>
          ) : null}
        </div>
      </Container>
    </div>
  );
};
