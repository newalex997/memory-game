import { Fragment, ReactNode } from "react";
import AppHeader from "./Header";
import AppMain from "./Main";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <AppHeader />
      <AppMain>{children}</AppMain>
    </Fragment>
  );
};

export default Layout;
