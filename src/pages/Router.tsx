import { createContext, ReactNode, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./mainLayout/MainLayout";
import { Main } from "./main/Main";
import { ImgPage } from "./img/ImgPage";
import { Favorites } from "./favorites/Favorites";

interface DataContextType {
  imgId: number;
  setImgId: (data: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [imgId, setImgId] = useState<number>(1);

  return (
    <DataContext.Provider value={{ imgId, setImgId }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const Router = () => {
  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/:id" element={<ImgPage />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
};
