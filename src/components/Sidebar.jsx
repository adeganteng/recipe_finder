import { Heart, Home } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../context/DarkMode";

const Sidebar = () => {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar />
    </>
  );
};

export default Sidebar;

const DesktopSideBar = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`py-3 pl-3 pr-0 md:py-10 md:pl-10  min-h-screen w-24 md:w-64 hidden sm:flex sm:items-start sm:flex-col sm:justify-start bg-teal-600  shadow-slate-500  ${
        darkMode ? "text-white border border-r-teal-950" : "text-teal-600"
      }`}
    >
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full pr-3 md:pr-10">
          <img src="/recipe-logo.png" alt="Logo" className="hidden md:block" />
          <img src="/cutlery.png" alt="Logo" className="block md:hidden" />
        </div>

        <div className="flex flex-col items-start pl-2 gap-8">
          <NavLink
            to="/"
            className={`flex gap-1 text-white font-semibold text-start nav-side`}
          >
            <Home size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </NavLink>
          <NavLink
            to="/favorites"
            className={"flex gap-1 text-white font-semibold nav-side"}
          >
            <Heart size={24} />
            <span className="font-bold hidden md:block">Favorites</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const MobileSideBar = () => {
  return (
    <div className="flex justify-center gap-24 bg-teal-600 fixed w-full bottom-0 left-0 z-10 px-5 pb-6 sm:hidden ">
      <NavLink
        to="/"
        className={
          "flex gap-1 text-white font-semibold  nav-bottom pt-3 flex-col items-center relative"
        }
      >
        <div className="flex flex-col justify-end items-center">
          <Home size={24} />
          <span className="font-bold hidden ">Home</span>
        </div>
      </NavLink>

      <NavLink
        to="/favorites"
        className={
          "flex gap-1 text-white font-semibold nav-bottom pt-3 flex-col items-center relative"
        }
      >
        <div className="flex flex-col justify-end items-center">
          <Heart size={24} />
          <span className="font-bold hidden ">Favorites</span>
        </div>
      </NavLink>
    </div>
  );
};
