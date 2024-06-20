import { useState, useEffect, useContext } from "react";
import myContext from "../../context/myContext";
import { smallBox,CardBox } from "../../constants/data";
import { useNavigate } from "react-router-dom";
import NoAuth from "../shared/NoAuth";

const Dashboard = () => {
  const context = useContext(myContext);
  const { show } = context;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex mx-3 md:ml-[2em] w-full">
        <div className="pt-4 w-full">
          {show ? (
            <NoAuth />
          ) : (
            <>
              <ul className="flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 mt-[7em] gap-3 w-full">
                {smallBox.map((text) => {
                  return (
                    <div className="flex flex-col bg-white w-full p-3 rounded-xl gap-4 mx-auto lg:gap-3 bg-white text-black border border-white dark:border-white shadow-mdtransform transition-transform duration-300 hover:scale-95 justify-center items-start">
                      <div className="font-bold">Total Appointments</div>
                      <div>1500</div>
                    </div>
                  );
                })}
              </ul>

              <ul className="flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 mt-3 gap-3 w-full">
                {CardBox.map((text) => {
                  return (
                    <div className="flex flex-col bg-white w-full h-[20em] p-3 rounded-xl gap-4 mx-auto lg:gap-3 bg-white text-black border border-white dark:border-white shadow-mdtransform transition-transform duration-300 hover:scale-95 justify-center items-start">
                      <div className="font-bold">Total Appointments</div>
                      <div>1500</div>
                    </div>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
