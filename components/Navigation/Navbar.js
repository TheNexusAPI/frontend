"use client";

import React, { useState, useEffect } from "react";
import NexusAPILogo from "../NexusAPI_Logo/NexusAPILogo";
import LoginIcon from "../Icons/LoginIcon/LoginIcon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrolled
          ? "fixed top-0 w-full bg-black h-16 text-white drop-shadow-2xl px-10 z-50 shadow-2xl"
          : "fixed top-0 w-full bg-transparent h-16 text-white drop-shadow-2xl px-10 z-50"
      }
    >
      <div className="flex flex-row justify-between items-center">
        <NexusAPILogo />
        <div className="flex flex-row justify-between items-center gap-10 text-md mr-16">
          <div className="hover:text-purple-400 cursor-pointer transition-all duration-300">
            Home
          </div>
          <div className="hover:text-purple-400 cursor-pointer transition-all duration-300">
            Documentation
          </div>
          <div className="hover:text-purple-400 cursor-pointer transition-all duration-300">
            Pricing
          </div>
          <div className="hover:text-purple-400 cursor-pointer transition-all duration-300">
            About Us
          </div>
        </div>
        <div className="cursor-pointer hover:opacity-50 transition-all duration-300">
          <div className="flex flex-row items-center gap-2 bg-white rounded-xl text-sm px-2 py-1 text-black">
            <span>Login</span>
            <LoginIcon color="black" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
