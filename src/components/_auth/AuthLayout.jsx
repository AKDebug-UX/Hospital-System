import React, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import myContext from "../../context/myContext";

export default function AuthLayout() {
  const context = useContext(myContext);
  const { user } = context;

  return (
    <>
      {user.uid ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-row fixed w-full">
          <section className="flex flex-1 mx-4 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.png"
            alt="logo"
            className="hidden lg:block h-screen w-[20em] xl:w-1/2 object-cover bg-no-repeat"
          />
        </div>
      )}
    </>
  );
}
