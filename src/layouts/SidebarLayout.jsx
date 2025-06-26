import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUser,
  faBrain,
  faChevronLeft,
  faChevronRight,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// Menu items
const SettingsMenuItems = [
  {
    id: 1,
    name: "Artifical Intelligences",
    icon: faBrain,
    href: "ai",
  },
];

const SidebarLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // State to track whether sidebar is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (href) => {
    return location.pathname.includes(`${href}`);
  };

  // Handler to toggle collapse
  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      // Outer container for the sidebar
      className={`border-r-[1px] overflow-x-hidden overflow-y-hidden border-black border-opacity-10 bg-white h-full
        transition-all duration-300
        ${isCollapsed ? "min-w-[69px]" : "min-w-[300px]"}`}
    >
      <div className="flex flex-col h-full max-h-screen">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-6">
          {/* Title (hidden if collapsed) */}
          {!isCollapsed && (
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              Dashboard (Client)
            </h2>
          )}

          {/* Toggle Button */}
          <button
            className="p-2 text-gray-600 rounded-md hover:bg-gray-200"
            onClick={handleToggle}
          >
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronLeft}
            />
          </button>
        </div>

        <hr className="h-px bg-black border-0 opacity-10" />

        {/* Menu Items */}
        <div className="flex-grow mt-6 overflow-y-auto">
          <div className="flex flex-col justify-between h-full gap-2">
            <div className="flex flex-col gap-2">
              {SettingsMenuItems.map((item) => {
                const active = isActive(item.href);
                const renderIcon = () => {
                  if (item.icon) {
                    // Font Awesome icon
                    return (
                      <FontAwesomeIcon className="w-[24px]" icon={item.icon} />
                    );
                  }
                  if (item.iconSvg) {
                    // Custom SVG or React component
                    return item.iconSvg({ isActive: active });
                  }
                  return null;
                };
                return (
                  <Link
                    key={item.id}
                    to={`dashboard/${item.href}`}
                    className={`flex gap-4 items-center py-3 px-6 text-sm font-normal text-black
                      hover:bg-[#F3F3F3]
                      ${active ? "bg-[#1877F2] bg-opacity-10" : ""}`}
                  >
                    {/* Icon section */}
                    <div
                      className={`flex items-center justify-center  w-[24px] text-xl
          ${active ? "text-[#1877F2]" : "text-black"}`}
                    >
                      {renderIcon()}
                    </div>
                    {/* Text (hidden if collapsed) */}
                    {!isCollapsed && (
                      <div
                        className={`text-lg font-medium whitespace-nowrap ${
                          active ? "text-[#1877F2]" : "text-dark-text"
                        } `}
                      >
                        {item.name}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
            <button
              className={`flex transition-colors font-semibold duration-150 items-center justify-center py-3 ${
                isCollapsed ? "px-4 mx-4" : "px-6 mx-6"
              } transition-all duration-300 text-sm hover:bg-[#ffeeee] outline-1 outline text-red-error-text  mb-10 rounded-lg outline-red-error-text`}
              color="error"
              variant="outlined"
              onClick={handleLogout}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={`${
                  isCollapsed ? "" : "mr-2"
                } transition-all duration-300`}
              />
              {!isCollapsed && "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
