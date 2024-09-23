import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/components";

export const MainLayout: FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
