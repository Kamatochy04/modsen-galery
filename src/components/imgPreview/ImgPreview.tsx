import { FC, useEffect, useState } from "react";

import { BookMark } from "../../assets";
import { Button } from "../button/Button";
import { Container } from "../container/Container";

import styles from "./imgPreview.module.scss";
import { ImgDataForWorks } from "../../utils/model/imgModel";
import { useImgService } from "../../utils/hook/useImgService";
import { useNavigate } from "react-router-dom";
import { useData } from "../../pages/Router";

export const ImgPreview: FC<ImgDataForWorks> = ({
  id,
  thumbnail,
  title,
  date_qualifier_title,
  artist_titles,
}) => {
  const { addImgToFavorites } = useImgService();

  const { setImgId, imgId } = useData();
  const navigate = useNavigate();

  const handelClick = () => {
    addImgToFavorites({
      id: id,
      thumbnail: thumbnail,
      title: title,
      date_qualifier_title: date_qualifier_title,
      artist_titles: artist_titles,
    });
  };

  const toImgInf = (id: number) => {
    console.log(id);
    setImgId(id);
    navigate(`/${id}`);
  };

  return (
    <div className={styles.preview} onClick={() => toImgInf(id)}>
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

        <Button onClick={() => handelClick()}>
          <BookMark />
        </Button>
      </Container>
    </div>
  );
};
