import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100%_-_4rem)] bg-primary dark:bg-primary-dark overflow-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
