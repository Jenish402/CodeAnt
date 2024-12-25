import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import {
  IoSettingsOutline,
  IoCallOutline,
  IoMenu,
  IoCloseSharp,
} from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

function Sidebar() {
  const [menuToggal, setMenuToggal] = useState(false);
  const navigate = useNavigate();

  const linksArray = [
    [
      { name: "Repositories", icon: <AiOutlineHome /> },
      { name: "AI Code Review", icon: <FaCode /> },
      { name: "Cloud Security", icon: <CiCloudOn /> },
      { name: "How To Use", icon: <LuBookText /> },
      { name: "Settings", icon: <IoSettingsOutline /> },
    ],
    [
      { name: "Support", icon: <IoCallOutline /> },
      {
        name: "Logout",
        icon: <MdOutlineLogout />,
        action: () => navigate("/"),
      },
    ],
  ];

  const handleLinkClick = (link) => {
    if (link.action) {
      link.action();
    }
  };

  const renderLinks = (links) =>
    links.map((link, i) => (
      <li
        key={i}
        className={`flex items-center gap-x-2 px-4 py-2 cursor-pointer rounded-md ${
          link.name === "Repositories"
            ? "bg-blue-500 text-white"
            : link.name === "Logout"
            ? "text-red-500 hover:bg-red-600 hover:text-white"
            : "hover:bg-blue-500 hover:text-white"
        }`}
        onClick={() => handleLinkClick(link)}
      >
        <span className="text-lg">{link.icon}</span>
        <span>{link.name}</span>
      </li>
    ));

  return (
    <div className="sidebar-container relative md:w-[254px] md:border-r w-full border-none font-inter">
      {menuToggal && (
        <div
          className="fixed top-[100px] inset-0 bg-gray-500 opacity-50 md:hidden z-50"
          onClick={() => setMenuToggal(false)}
        ></div>
      )}

      <div className="sub-sidebar-container flex flex-col sm:items-center items-start w-full h-full relative z-50">
        <div className="flex items-center justify-between w-full p-[20px]">
          <img className="w-[161px]" src={Logo} alt="Logo" />
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuToggal(!menuToggal)}
          >
            {menuToggal ? <IoCloseSharp /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`static  flex flex-col w-full p-[10px] top-[70px] space-y-[10px] transition-all duration-1000 bg-white z-[100] h-full max-md:h-[400px] ${
            menuToggal ? "block" : "hidden"
          } md:block`}
        >
          <select className="border h-10 rounded-md outline-none md:w-full">
            <option value="">Select</option>
            <option value="1">UtkarshDhairyaPanwar</option>
          </select>
          <ul className="text-nowrap flex flex-col gap-y-[10px] font-semibold">
            {renderLinks(linksArray[0])}
          </ul>
          <ul className="absolute bottom-[10px] text-nowrap font-semibold max-sm:bottom-[10px] max-md:bottom-[10px]">
            {renderLinks(linksArray[1])}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
