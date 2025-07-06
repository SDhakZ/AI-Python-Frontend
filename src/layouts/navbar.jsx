import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Navbar() {
  const title = useSelector((state) => state.navbar.title);
  const location = useLocation();
  return (
    <div className="overflow-hidden  bg-[#F4F6FA] h-screen">
      <nav className={`z-[999] sticky top-0 bg-white w-full border-gray-200 `}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-9">
          <div className="flex w-full gap-6" id="navbar-default">
            {location.pathname !== "/dashboard/ai" && (
              <button
                onClick={() => window.history.back()}
                className={`block text-3xl rounded-sm p-0 `}
              >
                &lt;
              </button>
            )}

            {title && (
              <h1 className="ml-4 text-2xl font-semibold text-slate-800">
                {title}
              </h1>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
