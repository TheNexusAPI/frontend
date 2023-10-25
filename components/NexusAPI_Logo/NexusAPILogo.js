import React, { useState } from "react";
import Image from "next/image";

const NexusAPILogo = ({ handleNavigation, homeRef }) => {
  const handleNexusAPIClick = () => {
    const e = {
      target: {
        innerText: "NexusAPI"
      }
    };
    handleNavigation(e);
  };

  return (
    <Image
      onClick={handleNexusAPIClick}
      className="hover:text-purple-400 cursor-pointer transition-all duration-300 w-[13%]"
      src="/assets/NexusAPI_Logo_Default-Transperent.png"
      alt="NexusAPI"
      width={0}
      height={0}
      sizes="100vw"
      
    />
    
    
  );
};

export default NexusAPILogo;
