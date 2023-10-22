import React from "react";
import Image from "next/image";
const NexusAPILogo = () => {
  return (
    <Image
      className="rounded-full w-[13%] cursor-pointer hover:scale-105 transition-all duration-300"
      src="/assets/NexusAPI_Logo_Default-Transperent.png"
      alt="NexusAPI"
      width={0}
      height={0}
      sizes="100vw"
    />
  );
};

export default NexusAPILogo;
