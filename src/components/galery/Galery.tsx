import { FC, useEffect, useState } from "react";
import { Container, ImgCard, SectionTitle, Text } from "..";
import { ArrovIcon } from "../../assets";
import { ImgDataForWorks } from "../../utils/model/imgModel";
import { useImgService } from "../../utils/hook/useImgService";
import { Loader } from "../loader/Loader";
import { generatePaginationItems } from "./generatePAgination";

export const Galery: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(112312);
  const [pagesArr, setPageArr] = useState<(number | string)[]>([]);
  const [imgData, setImgData] = useState<ImgDataForWorks[]>();
  const { loading, getAllImgs } = useImgService();
  const limit = 3;

  useEffect(() => {
    const res = getAllImgs(currentPage, limit);
    res.then((item) => {
      setImgData(item.data);
      if (item.pagination?.total_pages) {
        setTotalPages(item.pagination?.total_pages);
      }
    });
  }, []);

  useEffect(() => {
    setPageArr(generatePaginationItems({ currentPage, totalPages }));
  }, [currentPage, totalPages]);
  const getNewImgs = (page: number) => {
    getAllImgs(page, limit).then((res) => {
      setCurrentPage(page);
      setImgData(res.data);
    });
  };

  return (
    <Container>
      <Container variant="container">
        <SectionTitle
          title={"Topics for you"}
          subTitle={"Our special gallery "}
        />
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
          {pagesArr.map((item, id) => {
            return (
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
            );
          })}
          <ArrovIcon />
        </Container>
      </Container>
    </Container>
  );
};
