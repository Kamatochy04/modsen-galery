import { FC, useEffect, useState } from "react";

import { Container } from "../../components";
import { useImgService } from "../../utils/hook/useImgService";

import styles from "./img.module.scss";
import { ImgDataForWorks } from "../../utils/model/imgModel";
import { useData } from "../Router";
import { Loader } from "../../components/loader/Loader";

export const ImgPage: FC = () => {
  const { getOneImg, loading } = useImgService();
  const [imgData, setImgData] = useState<ImgDataForWorks>();
  const { imgId } = useData();

  useEffect(() => {
    console.log(imgId);
    getOneImg(imgId).then(setImgData);
  }, []);

  return (
    <section className={styles.img}>
      <Container variant="container">
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.img__box}>
            <img
              src={imgData?.thumbnail.lqip}
              alt={imgData?.thumbnail.alt_text}
              className={styles.img__item}
            />

            <div className={styles.img__inf}>
              <div className={styles.img__top}>
                <h3 className={styles.img__top_title}>
                  {imgData?.date_qualifier_title}
                </h3>

                <p className={styles.img__top_subtitle}>{imgData?.title}</p>
                <p className={styles.img__top_date}>
                  {imgData?.date_start} - {imgData?.date_end}
                </p>
              </div>

              <div className={styles.img__down}>
                <h4 className={styles.img__down_title}>Overview</h4>
                <ul className={styles.img__list}>
                  <li className={styles.img__list_item}>
                    <span>Artist nacionality:</span>{" "}
                    {imgData?.artist_titles.map((item) => item)}
                  </li>
                  <li className={styles.img__list_item}>
                    <span>Dimensions: Sheet:</span> {imgData?.dimensions}
                  </li>
                  <li className={styles.img__list_item}>
                    <span>Credit Line:</span> {imgData?.credit_line}
                  </li>
                  <li className={styles.img__list_item}>
                    <span>Description: </span>
                    {imgData?.dimensions}
                  </li>

                  <li className={styles.img__list_item}>
                    {imgData?.date_qualifier_title}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
