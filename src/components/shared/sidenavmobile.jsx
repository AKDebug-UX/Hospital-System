import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../constants/index";
import myContext from "../../context/myContext";
import { IoMdClose } from "react-icons/io";
import Loader from "../ui/Loader";

const SideNavMobile = ({ setSideNav }) => {
  const context = useContext(myContext);
  const { show, user, isLoading, fetchUser } = context;
  let navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSignOut = async (e) => {
    e.preventDefault();
    // signOut();
    setIsAuthenticated(false);
    navigate("/sign-in");
  };

  return (
    <>
      <div className="fixed w-[90%] flex flex-col gap-y-4 px-5 pt-8 left-0 bg-black overflow-y-scroll h-screen z-[9999] top-0">
        <div className="flex items-center justify-between">
          <button> </button>
          <button
            className="text-white text-[25px]"
            onClick={() => setSideNav(false)}
          >
            <IoMdClose />
          </button>
        </div>

        {isLoading || show ? (
          <div className="h-14">
            <button
              className="px-12 py-3 mb-[16em] text-white rounded-full bg-primary-A1 w-full"
              onClick={() => navigate(`/sign-in`)}
            >
              Sign in
            </button>
          </div>
        ) : (
          <Link
            to={`/profile/${user.uid}`}
            onClick={() => setSideNav(false)}
            className="flex gap-3 items-center"
          >
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="flex items-center base-medium lg:body-bold text-white">
                {user.name}
                {user?.verified === true && (
                  <>
                    <img
                      title="verified user"
                      className="w-3 h-3 ml-1"
                      src="/assets/images/M/checklist.png"
                    />
                  </>
                )}
              </p>
              <p className="small-regular text-primary_A1">@{user.username}</p>
            </div>
          </Link>
        )}

        <ul
          onClick={() => setSideNav(false)}
          className="flex flex-col mt-5 gap-2"
        >
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`text-white rounded-md group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <div
                    className={`group-hover:invert group-hover:brightness-0 group-hover:transition ${
                      isActive && "invert brightness-0 transition"
                    }`}
                  >
                    {link.imgURL}
                  </div>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="flex items-center text-white gap-6 mt-12"
          onClick={(e) => handleSignOut(e)}
        >
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className="small-medium lg:base-medium">Logout</p>
        </button>
      </div>
    </>
  );
};

export default SideNavMobile;
