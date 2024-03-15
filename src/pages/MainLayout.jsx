import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return <>
  <Header></Header>
  <main>
    <Outlet></Outlet>
  </main>
  </>;
};

export default MainLayout;
