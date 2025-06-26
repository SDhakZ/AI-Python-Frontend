import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const title = useSelector((state) => state.navbar.title);
  return (
    <div className="overflow-hidden  bg-[#F4F6FA] h-screen">
      <nav className={`z-[999] sticky top-0 bg-white w-full border-gray-200 `}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-8">
          <div className="flex w-full gap-6" id="navbar-default">
            <button
              onClick={() => window.history.back()}
              className={`block text-xl rounded-sm p-0 `}
            >
              &lt;
            </button>
            {title && (
              <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
