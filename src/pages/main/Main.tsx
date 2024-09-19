import { FC, useEffect, useState } from "react";

import { ArrovIcon } from "../../assets";
import { useImgService } from "../../utils/hook/useImgService";
import {
  Container,
  ImgCard,
  ImgPreview,
  Input,
  SectionTitle,
  Span,
  Text,
} from "../../components";
import { ImgDataForWorks } from "../../utils/model/imgModel";
import { Loader } from "../../components/loader/Loader";

export const Main: FC = () => {
  const { loading, getAllImgs } = useImgService();
  const [imgData, setImgData] = useState<ImgDataForWorks[]>();

  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState<number>();

  useEffect(() => {
    const res = getAllImgs(page);
    res.then((item) => {
      setImgData(item.data);
      setPageQty(item.pagination?.total_pages);
    });
  }, []);

  return (
    <>
      <Container padding="120px 0">
        <Container variant="container">
          <Text
            fontSize="64px"
            fontWeight="700"
            color="#393939"
            textAlign="center"
            width="684px"
            margin="0 auto"
          >
            let's find some <Span color="var(--main-color)">art</Span> here!
          </Text>

          <Input placeholder="Search art, artist, work..." />
        </Container>
      </Container>

      <Container>
        <Container variant="container">
          <SectionTitle
            title={"Topics for you"}
            subTitle={"Our special gallery "}
          />
          <Container variant="flex-container" margin="40px 0 0 0">
            <ImgCard />
            <ImgCard />
            <ImgCard />
          </Container>
          <Container
            display="flex"
            justifyContent="end"
            alignItems="center"
            gap="10px"
            margin="95px 0 0 0"
          >
            <Text fontSize="18px" fontWeight="300" color="var(--dark-color)">
              1
            </Text>
            <Text fontSize="18px" fontWeight="300" color="var(--dark-color)">
              2
            </Text>
            <Text fontSize="18px" fontWeight="300" color="var(--dark-color)">
              3
            </Text>
            ...
            <Text fontSize="18px" fontWeight="300" color="var(--dark-color)">
              {pageQty}
            </Text>
            <ArrovIcon />
          </Container>
        </Container>
      </Container>

      <Container padding="120px 0">
        <Container variant="container">
          <SectionTitle
            title={"Other works for you"}
            subTitle={"Here some more "}
          />
          {loading ? (
            <>
              <Loader />
            </>
          ) : (
            <Container variant="grid-container" margin="40px 0 0 0">
              {imgData?.map((item) => {
                return <ImgPreview {...item} key={item.id} />;
              })}
            </Container>
          )}
        </Container>
      </Container>
    </>
  );
};
