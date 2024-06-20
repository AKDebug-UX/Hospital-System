import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../ui/Button";
// import { useUserContext } from "@/lib/context/AuthContext";
import SideNavMobile from "./sidenavmobile";
import { Notifications } from "@material-ui/icons";

const Topbar = () => {
  // const navigate = useNavigate();
  // const { user } = useUserContext();
  const [sideNav, setSideNav] = useState(false);

  return (
    <section className="fixed top-0 z-50 md:h-20 bg-dark-2 items-center justify-center w-full">
      <div className="flex justify-between py-4 md:pt-6 px-5 items-center">
        <Link to="/" className="flex gap-2 text-white md:hidden text-[18px] items-center">
          <img src="/assets/icons/logo.png" alt="logo" className="" />
          <b>Hospital System</b>
        </Link>
        <div></div>

        <div className="flex justify-end gap-4">
          <Button
            variant="ghost"
            className="text-primary_A1"
            // onClick={() => signOut()}
          >
            <Notifications />
          </Button>
          <div className="flex-center md:hidden gap-3">
            <img
              onClick={() => setSideNav(!sideNav)}
              src={"/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
          {sideNav && <SideNavMobile setSideNav={setSideNav} />}
        </div>
      </div>
    </section>
  );
};

export default Topbar;
