import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import { bottombarLinks } from "../../constants";

const Bottombar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={`${isScrolled ? 'hidden' : ''} z-50 flex justify-between items-center w-full sticky -bottom-1 rounded-t-[20px] bg-dark-2 px-5 py-3 md:hidden mt-[-3.4em]`}>
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              isActive && "rounded-[10px] bg-primary-500"
            } flex flex-col items-center justify-center mx-auto gap-1 p-2 transition`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={16}
              height={16}
              className={`${isActive && "invert brightness-0 transition"}`}
            />

            <p className="text-[14px] text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
