import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./mainLayout/MainLayout";
import { Main } from "./main/Main";
import { ImgPage } from "./img/ImgPage";
import { Favorites } from "./favorites/Favorites";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/:id" element={<ImgPage />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
};
