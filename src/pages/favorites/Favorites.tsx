import { FC, useEffect, useState } from "react";

import {
  Container,
  ImgPreview,
  SectionTitle,
  Span,
  Text,
} from "../../components";
import { useImgService } from "../../utils/hook/useImgService";
import { ImgDataForWorks } from "../../utils/model/imgModel";
import { BookMarkBig } from "../../assets";

export const Favorites: FC = () => {
  const [favoritesImg, setFavoritesImg] = useState<ImgDataForWorks[]>();
  const { getFavoritesImg } = useImgService();

  useEffect(() => {
    setFavoritesImg(getFavoritesImg());
  }, []);

  return (
    <Container padding="120px 0" background="#fff">
      <Container variant="container">
        <Text
          fontSize="64px"
          fontWeight="700"
          color="#393939"
          textAlign="center"
          width="420px"
          margin="0 auto 120px auto"
        >
          Here are your
          <Span color="var(--main-color)">
            <BookMarkBig /> favorites
          </Span>
        </Text>
        <SectionTitle title={"Your favorites list"} subTitle={"Saved by you"} />

        {favoritesImg?.length === 0 || favoritesImg?.length === undefined ? (
          <Text
            fontSize="54px"
            fontWeight="700"
            color="#c9c9c9b9"
            textAlign="center"
            width="100%"
            margin="120px auto 120px auto"
          >
            You don't have any favorite paintings
          </Text>
        ) : (
          <Container variant="grid-container" padding="40px 0 0 0">
            {favoritesImg?.map((item) => (
              <ImgPreview key={item.id} {...item} />
            ))}
          </Container>
        )}
      </Container>
    </Container>
  );
};
