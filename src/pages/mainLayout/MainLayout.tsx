import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/components";

export const MainLayout: FC = () => {
  return (
    <div className="app">
      <Header />
      <section className="app-section">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};
