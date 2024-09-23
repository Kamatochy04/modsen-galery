import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Button } from "..";

import { ImgDataForWorks, useImgService } from "@/utils";
import { BookMark } from "@/assets";
import { useData } from "../../pages/Router";

import styles from "./imgPreview.module.scss";

export const ImgPreview: FC<ImgDataForWorks> = ({
  id,
  thumbnail,
  title,
  date_qualifier_title,
  artist_titles,
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

        <Button onClick={handelClick}>
          <BookMark />
        </Button>
      </Container>
    </div>
  );
};
