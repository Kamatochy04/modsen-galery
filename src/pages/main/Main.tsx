import { FC, useEffect, useState } from "react";

import {
  Container,
  ErrorBoundary,
  Galery,
  Input,
  Span,
  Text,
} from "@/components";
import { OtherWorks } from "../otherWorks/OtherWorks";
import { ImgDataForWorks, useImgService } from "@/utils";

import styles from "./main.module.scss";
import { useNavigate } from "react-router-dom";
import { useData } from "../Router";

export const Main: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);
  const [searchArr, setSearchArr] = useState<ImgDataForWorks[]>([]);

  const { setImgId } = useData();
  const { getAllImgs } = useImgService();

  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    getAllImgs(1, 12).then((res) => {
      const newArr =
        res.data?.filter((item) =>
          item.title
            .toLocaleUpperCase()
            .includes(debouncedQuery.toLocaleUpperCase())
        ) || [];
      console.log(newArr);
      setSearchArr(newArr);
    });
  }, [query]);

  const toImgInf = (id: number) => {
    setImgId(id);
    navigate(`/${id}`);
  };

  return (
    <>
      <Container padding="120px 0">
        <Container variant="container">
          <Text
            fontSize="64px"
            fontWeight="700"
            color="#393939"
            textalign="center"
            width="684px"
            margin="0 auto"
          >
            let's find some <Span color="var(--main-color)">art</Span> here!
          </Text>

          <Container variant="flex-container">
            <Input
              placeholder="Search art, artist, work..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query.length > 0 && (
              <div className={styles.search_box}>
                {searchArr.map((item, id) => (
                  <div
                    className={styles.search_box__item}
                    key={id}
                    onClick={() => toImgInf(item.id)}
                  >
                    <img
                      src={item.thumbnail.lqip}
                      alt={item.thumbnail.alt_text}
                    />
                    <p className={styles.search_box__item_name}>{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </Container>
      </Container>

      <ErrorBoundary>
        <Galery />
      </ErrorBoundary>

      <OtherWorks />
    </>
  );
};
