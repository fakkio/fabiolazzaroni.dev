import React, {FC} from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {layout} from "./Layout.module.scss";
import {Main} from "./Main";

interface LayoutProps {
  centered?: boolean;
}

const Layout: FC<LayoutProps> = ({centered, children}) => {
  return (
    <div className={layout}>
      <Header />
      <Main centered={centered}>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
