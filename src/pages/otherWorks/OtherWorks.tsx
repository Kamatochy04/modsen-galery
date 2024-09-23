import { FC, useEffect, useState } from "react";
import {
  Container,
  ErrorBoundary,
  ImgPreview,
  SectionTitle,
  Loader,
} from "@/components";
import { ImgDataForWorks, useImgService } from "@/utils";

export const OtherWorks: FC = () => {
  const { loading, getAllImgs } = useImgService();

  const [imgData, setImgData] = useState<ImgDataForWorks[]>();

  useEffect(() => {
    const res = getAllImgs(3, 9);
    res.then((item) => {
      setImgData(item.data);
    });
  }, []);

  return (
    <Container padding="120px 0">
      <Container variant="container">
        <SectionTitle
          title={"Other works for you"}
          subTitle={"Here some more "}
        />
        <ErrorBoundary>
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
        </ErrorBoundary>
      </Container>
    </Container>
  );
};
