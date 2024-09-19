import { FC } from "react";

import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
