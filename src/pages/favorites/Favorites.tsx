import { FC, useEffect, useState } from "react";

import { Container, ImgPreview, SectionTitle, Span, Text } from "@/components";
import { ImgDataForWorks, useImgService } from "@/utils";
import { BookMarkBig } from "@/assets";

export const Favorites: FC = () => {
  const [favoritesImg, setFavoritesImg] = useState<ImgDataForWorks[]>();
  const { getFavoritesImg, removeImgById } = useImgService();

  useEffect(() => {
    setFavoritesImg(getFavoritesImg());
  }, [favoritesImg]);

  const removeImg = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.stopPropagation();
    removeImgById(id);
  };
  return (
    <Container padding="120px 0" background="#fff">
      <Container variant="container">
        <Text
          fontSize="64px"
          fontWeight="700"
          color="#393939"
          textalign="center"
          width="430px"
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
            textalign="center"
            width="100%"
            margin="120px auto 120px auto"
          >
            You don't have any favorite paintings
          </Text>
        ) : (
          <Container variant="grid-container" padding="40px 0 0 0">
            {favoritesImg?.map((item) => (
              <ImgPreview key={item.id} {...item} removeImg={removeImg} />
            ))}
          </Container>
        )}
      </Container>
    </Container>
  );
};
