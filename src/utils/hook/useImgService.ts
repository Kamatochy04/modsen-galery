import { Img, ImgDataForWorks, Pagination } from "../model/imgModel";
import { useHttp } from "./useHttp";

export const useImgService = () => {
  const { loading, request, error } = useHttp();
  const _baseUrl = `https://api.artic.edu/api/v1/artworks`;

  const getAllImgs = async (page?: number, limit?: number) => {
    let pagination;
    let data: ImgDataForWorks[] | undefined = [];

    const res = await request<{
      pagination: Pagination;
      data: Img[];
    }>(_baseUrl + `?page=${page}&limit=${limit}`);

    data = res.data?.data.map(_tranformData);
    pagination = res.data?.pagination;

    return { pagination, data };
  };

  const getOneImg = async (id: number) => {
    const res = await request<{
      data: Img;
    }>(_baseUrl + `/${id}`);

    if (res.data?.data) {
      return _tranformData(res.data?.data);
    }
  };

  const addImgToFavorites = (imgData: ImgDataForWorks) => {
    const allFavoritesImgs = localStorage.getItem("favoriteImgArr");

    if (allFavoritesImgs) {
      const imgArr: ImgDataForWorks[] = JSON.parse(allFavoritesImgs);

      const isImgExists = imgArr.some((img) => img.id === imgData.id);

      if (!isImgExists) {
        imgData.isFavorite = true;
        imgArr.push(imgData);
        localStorage.setItem("favoriteImgArr", JSON.stringify(imgArr));
      }
    } else {
      localStorage.setItem("favoriteImgArr", JSON.stringify([imgData]));
    }
  };

  const removeImgById = (id: number) => {
    const allFavoritesImgs = localStorage.getItem("favoriteImgArr");

    if (allFavoritesImgs) {
      const imgArr: ImgDataForWorks[] = JSON.parse(allFavoritesImgs);

      const updatedImgs = imgArr.filter((item) => {
        if (item.id !== id) {
          return item;
        } else {
          item.isFavorite = false;
        }
      });
      localStorage.setItem("favoriteImgArr", JSON.stringify(updatedImgs));
    }
  };

  const getFavoritesImg = (): ImgDataForWorks[] | undefined => {
    const allFavoritesImgs = localStorage.getItem("favoriteImgArr");

    if (allFavoritesImgs) {
      return JSON.parse(allFavoritesImgs);
    }
  };

  const _tranformData = (res: Img): ImgDataForWorks => {
    return {
      id: res.id,
      thumbnail: res.thumbnail,
      title: res.title,
      date_qualifier_title: res.date_qualifier_title,
      artist_titles: res.artist_titles,
      dimensions: res.dimensions,
      credit_line: res.credit_line,
      description: res.description,
      date_start: res.date_start,
      date_end: res.date_end,
    };
  };

  return {
    loading,
    error,
    getAllImgs,
    addImgToFavorites,
    getFavoritesImg,
    getOneImg,
    removeImgById,
  };
};
