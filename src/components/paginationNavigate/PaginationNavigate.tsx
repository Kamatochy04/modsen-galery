import { FC } from "react";
import { Container, Text } from "..";
import { ArrovIcon } from "@/assets";

type PaginationNavigateType = {
  pagesArr: (number | string)[];
  getNewImgs: (page: number) => void;
  currentPage: number;
};

import styles from "./pagination.module.scss";

export const PaginationNavigate: FC<PaginationNavigateType> = ({
  pagesArr,
  currentPage,
  getNewImgs,
}) => {
  return (
    <Container
      display="flex"
      justifycontent="end"
      alignitems="center"
      gap="10px"
      margin="95px 0 0 0"
    >
      {pagesArr.map((item, id) => (
        <Text
          key={id}
          fontSize="18px"
          fontWeight="300"
          color="var(--dark-color)"
        >
          {typeof item === "number" ? (
            <button
              className={item === currentPage ? styles.active : ""}
              onClick={() => getNewImgs(item)}
            >
              {item}
            </button>
          ) : (
            <span>{item}</span>
          )}
        </Text>
      ))}
      <ArrovIcon />
    </Container>
  );
};
