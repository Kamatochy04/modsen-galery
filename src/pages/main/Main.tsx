import { FC, useEffect, useState } from "react";

import { ArrovIcon } from "../../assets";
import { useImgService } from "../../utils/hook/useImgService";
import {
  Container,
  ImgCard,
  ImgPreview,
  Input,
  SectionTitle,
  SmallImgSkeleton,
} from "../../components";

import styles from "./main.module.scss";
import { ImgDataForWorks } from "../../utils/model/imgModel";

export const Main: FC = () => {
  const { error, loading, getAllImgs } = useImgService();
  const [imgData, setImgData] = useState<ImgDataForWorks[]>();

  useEffect(() => {
    const res = getAllImgs();
    console.log(res.then(setImgData));
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Container variant="container">
          <h1 className={styles.main__title}>
            let's find some <span>art</span> here!
          </h1>

          <Input placeholder="Search art, artist, work..." />
        </Container>
      </main>

      <section className={styles.galery}>
        <Container variant="container">
          <SectionTitle
            title={"Topics for you"}
            subTitle={"Our special gallery "}
          />
          <Container variant="flex-container">
            <ImgCard />
            <ImgCard />
            <ImgCard />
          </Container>
          <div className={styles.galery__nav}>
            <div
              className={`${styles.galery__nav_active} ${styles.galery__nav_item}`}
            >
              1
            </div>
            <div className={styles.galery__nav_item}>2</div>
            <div className={styles.galery__nav_item}>3</div>
            <div className={styles.galery__nav_item}>4</div>
            <div>
              <ArrovIcon />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.other}>
        <Container variant="container">
          <SectionTitle
            title={"Other works for you"}
            subTitle={"Here some more "}
          />

          <Container
            variant="grid-container"
            className={styles.other__container}
          >
            <SmallImgSkeleton />
            {loading ? (
              <>
                <SmallImgSkeleton /> <SmallImgSkeleton /> <SmallImgSkeleton />
              </>
            ) : (
              imgData?.map((item) => {
                return <ImgPreview key={item.id} {...item} />;
              })
            )}
          </Container>
        </Container>
      </section>
    </>
  );
};
