import { Outlet } from "react-router-dom";

import Topbar from "../shared/Topbar";
// import Bottombar from "../shared/Bottombar";
import {LeftSidebar} from "../shared";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 md:ml-[18em] h-full">
        <Outlet />
      </section>

      {/* <Bottombar /> */}
    </div>
  );
};

export default RootLayout;
