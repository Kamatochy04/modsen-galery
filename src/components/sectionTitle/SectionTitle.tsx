import { FC } from "react";

import styles from "./sectiontitle.module.scss";

type SectionTitleProps = {
  title: string;
  subTitle: String;
};

export const SectionTitle: FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <>
      <p className={styles.subTitle}>{subTitle}</p>
      <h3 className={styles.title}>{title}</h3>
    </>
  );
};
