import { Outlet, Link } from "react-router-dom";
import  "./css/Main.css";

const Layout = () => {
  return (
    <>
      <Outlet />     
    </>
  )
};

export default Layout;