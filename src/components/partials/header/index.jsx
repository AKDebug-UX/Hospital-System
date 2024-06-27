import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import SwitchDark from "./Tools/SwitchDark";
import useWidth from "@/hooks/useWidth";
import useSidebar from "@/hooks/useSidebar";
import useNavbarType from "@/hooks/useNavbarType";
import useMenulayout from "@/hooks/useMenulayout";
import useSkin from "@/hooks/useSkin";
import Logo from "./Tools/Logo";
import SearchModal from "./Tools/SearchModal";
import Profile from "./Tools/Profile";
import Notification from "./Tools/Notification";
import Message from "./Tools/Message";
import useRtl from "@/hooks/useRtl";
import SideNavMobile from "@/components/partials/sidebar/MobileMenu";

const Header = ({ className = "custom-class" }) => {
  const [collapsed, setMenuCollapsed] = useSidebar();
  const [sideNav, setSideNav] = useState(false);

  const { width, breakpoints } = useWidth();
  const [navbarType] = useNavbarType();
  const navbarTypeClass = () => {
    switch (navbarType) {
      case "floating":
        return "floating  has-sticky-header";
      case "sticky":
        return "sticky top-0 z-[999]";
      case "static":
        return "static";
      case "hidden":
        return "hidden";
      default:
        return "sticky top-0";
    }
  };
  const [menuType] = useMenulayout();
  const [skin] = useSkin();
  const [isRtl] = useRtl();

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const borderSwicthClass = () => {
    if (skin === "bordered" && navbarType !== "floating") {
      return "border-b border-slate-200 dark:border-slate-700";
    } else if (skin === "bordered" && navbarType === "floating") {
      return "border border-slate-200 dark:border-slate-700";
    } else {
      return "dark:border-b dark:border-slate-700 dark:border-opacity-60";
    }
  };
  return (
    <header className={className + " " + navbarTypeClass()}>
      <div
        className={` app-header md:px-6 px-[15px] w-full dark:bg-slate-800 shadow-base dark:shadow-base3 bg-white
        ${borderSwicthClass()}
             ${
               menuType === "horizontal" && width > breakpoints.lg
                 ? "py-1"
                 : "md:py-6 py-3"
             }
        `}
      >
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex items-center md:space-x-4 space-x-2 rtl:space-x-reverse">
            {width < breakpoints.lg && <Logo />}
            <SearchModal />
          </div>

          {/* Nav Tools  */}
          <div className="nav-tools flex items-center justify-end lg:space-x-6 space-x-3 rtl:space-x-reverse">
            <SwitchDark />
            {width >= breakpoints.lg && <Message />}
            {width >= breakpoints.lg && <Notification />}
            {/* {width >= breakpoints.md && } */}
            <Profile />
            <div
              className="cursor-pointer flex md:hidden text-slate-900 dark:text-white text-2xl"
              onClick={() => setSideNav(!sideNav)}
            >
              <Icon icon="heroicons-outline:menu-alt-3" />
            </div>
          </div>

          {sideNav && <SideNavMobile setSideNav={setSideNav} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
