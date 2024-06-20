import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../constants";
import myContext from "../../context/myContext";
import { RiLogoutBoxFill } from "react-icons/ri";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const context = useContext(myContext);
  const { show, user, fetchUser, isLoading, logout } = context;

  useEffect(() => {
    fetchUser();
  }, []);
  // const { mutate: signOut } = useSignOutAccount();

  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between sm:w-[16em] md:w-[18em] z-50 bg-dark-2 h-screen fixed overflow-y-hidden">
      <div className="flex flex-col gap-6">
        <Link to="/" className="flex gap-3 mb-3 items-center">
          <img src="/assets/icons/logo.png" alt="logo" className="" />
          <h1 className="text-[22px] text-white font-bold">Site Name</h1>
        </Link>

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
              <p className="flex items-center base-medium font-bold text-white">
                user fullname 
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
              <p className="small-regular text-primary_A1">@username</p>
            </div>
          </Link>
        )}

        <ul className="flex flex-col mt-6 gap-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`text-white rounded-md ${
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
      </div>

      <button
        className="flex items-center text-white gap-6 mt-12"
        onClick={logout}
      >
        <RiLogoutBoxFill />
        <p className="small-medium lg:base-medium">Logout</p>
      </button>
    </nav>
  );
};

export default LeftSidebar;
