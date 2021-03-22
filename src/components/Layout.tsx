import React, {FC} from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {layout} from "./Layout/Layout.module.scss";
import {Main} from "./Main";

interface LayoutProps {
  centered?: boolean;
  vCentered?: boolean;
}

const Layout: FC<LayoutProps> = ({centered, children, vCentered}) => {
  return (
    <div className={layout}>
      <Header />
      <Main centered={centered} vCentered={vCentered}>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
