import React from "react";
import NexusAPILogo from "../NexusAPI_Logo/NexusAPILogo";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NexusAPILogo />
        <div>Home</div>
        <div>Documentation</div>
        <div>Pricing</div>
        <div>About Us</div>
      </div>
    </nav>
  );
};

export default Navbar;
