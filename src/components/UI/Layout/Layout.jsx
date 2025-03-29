import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
