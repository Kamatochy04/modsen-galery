import { FC, useEffect, useState } from "react";

import { ImgDataForWorks, useData, useImgService } from "@/utils";
import { Loader, Container } from "@/components";

import styles from "./img.module.scss";

export const ImgPage: FC = () => {
  const { getOneImg, loading } = useImgService();
  const [imgData, setImgData] = useState<ImgDataForWorks>();
  const { imgId } = useData();

  useEffect(() => {
    getOneImg(imgId).then((data) => {
      setImgData(data);
      console.log(data);
    });
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
                <h3 className={styles.img__top_title}>{imgData?.title}</h3>

                <p className={styles.img__top_subtitle}>
                  {imgData?.artist_titles}
                </p>
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
                    {imgData?.description}
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
