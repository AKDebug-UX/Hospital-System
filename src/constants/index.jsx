import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";

export const sidebarLinks = [
  {
    imgURL: <TiHome />,
    route: "/",
    label: "Dashboard",
  },
  {
    imgURL: <FaUserDoctor />,
    route: "/doctors",
    label: "Doctors",
  },
  {
    imgURL: <MdAddModerator />,
    route: "/adddoctor",
    label: "Add Doctor",
  },
  {
    imgURL: <AiFillMessage />,
    route: "/messages",
    label: "Messages",
  },
];

export const bottombarLinks = [
//   {
//     imgURL: "/assets/icons/home.svg",
//     route: "/",
//     label: "Portfolio",
//   },
//   {
//     imgURL: "/assets/icons/calculator.png",
//     route: "/calculator",
//     label: "Calculator",
//   },
//   {
//     imgURL: "/assets/icons/market.png",
//     route: "/market",
//     label: "Market",
//   },
//   {
//     imgURL: "/assets/icons/people.svg",
//     route: "/all-users",
//     label: "People",
//   },
];

// export const navdata = [
//   {
//     imgURL: "/assets/icons/home.svg",
//     route: "/",
//     label: "Portfolio",
//   },
//   // {
//   //   imgURL: "/assets/icons/wallpaper.svg",
//   //   route: "/explore",
//   //   label: "Explore",
//   // },
//   {
//     imgURL: "/assets/icons/people.svg",
//     route: "/all-users",
//     label: "People",
//   },
//   {
//     imgURL: "/assets/icons/bookmark.svg",
//     route: "/saved",
//     label: "Bookmarks",
//   },
//   // {
//   //   imgURL: "/assets/icons/gallery-add.svg",
//   //   route: "/create-post",
//   //   label: "Create Post",
//   // },
// ];
