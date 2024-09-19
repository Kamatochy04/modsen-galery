import { FC } from "react";

import { Container } from "../../components";

import styles from "./img.module.scss";

export const ImgPage: FC = () => {
  return (
    <section className={styles.img}>
      <Container variant="container">
        <div className={styles.img__box}>
          <img src="" alt="" className={styles.img__item} />

          <div className={styles.img__inf}>
            <div className={styles.img__top}>
              <h3 className={styles.img__top_title}>
                Charles V, bust length, holding a sword, facing right
              </h3>

              <p className={styles.img__top_subtitle}>Giovanni Britto</p>
              <p className={styles.img__top_date}>1535–45</p>
            </div>

            <div className={styles.img__down}>
              <h4 className={styles.img__down_title}>Overview</h4>
              <ul className={styles.img__list}>
                <li className={styles.img__list_item}>
                  <span>Artist nacionality:</span> German
                </li>
                <li className={styles.img__list_item}>
                  <span>Dimensions: Sheet:</span> 19 3/8 × 13 11/16 in. (49.2 ×
                  34.8 cm)
                </li>
                <li className={styles.img__list_item}>
                  <span>Credit Line:</span> Rogers Fund, 1917
                </li>
                <li className={styles.img__list_item}>
                  <span>Repository: </span> Metropolitan Museum of Art, New
                  York, NY
                </li>

                <li className={styles.img__list_item}> Public</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
