import { Img, ImgDataForWorks, Pagination } from "../model/imgModel";
import { useHttp } from "./useHttp";

export const useImgService = () => {
  const { loading, request, error } = useHttp();

  const _baseUrl = `https://api.artic.edu/api/v1/artworks`;

  const getAllImgs = async () => {
    const res = request<{
      paliganation: Pagination;
      data: Img[];
    }>(_baseUrl);

    return (await res).data?.data.map(_tranformData);
  };

  const _tranformData = (res: Img): ImgDataForWorks => {
    return {
      id: res.id,
      thumbnail: res.thumbnail,
      title: res.title,
      date_qualifier_title: res.date_qualifier_title,
      artist_titles: res.artist_titles,
    };
  };

  return { loading, error, getAllImgs };
};
