import { FC, useEffect, useState } from "react";

import { generatePaginationItems } from "./generatePAgination";

import { Container, ImgCard, SectionTitle, Text, Loader } from "..";
import { ArrovIcon } from "@/assets";
import { ImgDataForWorks, useImgService } from "@/utils";

import styles from "./galery.module.scss";

export const Galery: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(112312);
  const [pagesArr, setPageArr] = useState<(number | string)[]>([]);
  const [imgData, setImgData] = useState<ImgDataForWorks[]>();
  const [limit, setLimit] = useState(3);

  const [date, setDate] = useState("off");
  const [alphabet, setAlphabet] = useState("off");

  const { loading, getAllImgs } = useImgService();

  useEffect(() => {
    const res = getAllImgs(currentPage, limit);
    res.then((item) => {
      setImgData(item.data);
      if (item.pagination?.total_pages) {
        setTotalPages(item.pagination?.total_pages);
      }
    });
  }, [currentPage, limit]);

  useEffect(() => {
    setPageArr(generatePaginationItems({ currentPage, totalPages }));
  }, [currentPage, totalPages]);

  const getNewImgs = (page: number) => {
    getAllImgs(page, limit).then((res) => {
      setCurrentPage(page);
      setImgData(res.data);
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLimit(12);
    console.log(date);
    console.log(alphabet);
    if (!imgData) return;
    let sortedData: ImgDataForWorks[] = [...imgData];

    if (date === "on") {
      sortedData.sort((a, b) => {
        if (a.date_start && b.date_start) {
          return a.date_start - b.date_start;
        } else if (a.date_start) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    if (alphabet === "on") {
      sortedData.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }

    setImgData(sortedData);
  };

  return (
    <Container>
      <Container variant="container">
        <SectionTitle
          title={"Topics for you"}
          subTitle={"Our special gallery "}
        />

        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
          <p className={styles.form__text}>Сортировать по:</p>
          <label className={styles.form__item}>
            Алфавиту
            <input
              type="checkbox"
              onChange={() => setAlphabet(alphabet === "on" ? "off" : "on")}
            />
          </label>
          <label className={styles.form__item}>
            Году создания
            <input
              type="checkbox"
              checked={date === "on"}
              onChange={() => setDate(date === "on" ? "off" : "on")}
            />
          </label>

          <button type="submit">Найти</button>
        </form>

        {loading ? (
          <Loader />
        ) : (
          <Container variant="flex-container" margin="40px 0 0 0">
            {imgData?.map((item) => (
              <ImgCard key={item.id} {...item} />
            ))}
          </Container>
        )}

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
                <button onClick={() => getNewImgs(item)}>{item}</button>
              ) : (
                <span>{item}</span>
              )}
            </Text>
          ))}
          <ArrovIcon />
        </Container>
      </Container>
    </Container>
  );
};
