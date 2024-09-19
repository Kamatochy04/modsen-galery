import { FC, useEffect, useState } from "react";
import { Container, ImgCard, SectionTitle, Text } from "..";
import { ArrovIcon } from "../../assets";
import { ImgDataForWorks } from "../../utils/model/imgModel";
import { useImgService } from "../../utils/hook/useImgService";
import { Loader } from "../loader/Loader";

export const Galery: FC = () => {
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState<number>();
  const [imgData, setImgData] = useState<ImgDataForWorks[]>();
  const { loading, getAllImgs } = useImgService();

  useEffect(() => {
    const res = getAllImgs(page, 3);
    res.then((item) => {
      setImgData(item.data);
    });
  }, []);

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
  );
};
