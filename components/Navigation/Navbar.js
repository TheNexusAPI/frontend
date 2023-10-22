import React from "react";
import NexusAPILogo from "../NexusAPI_Logo/NexusAPILogo";
import LoginIcon from "../Icons/LoginIcon/LoginIcon";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full">
      <div className="flex flex-row justify-between items-center bg-black h-16 text-white drop-shadow-2xl px-10 bg-transparent">
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
