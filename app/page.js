"use client";
import Navbar from "@/components/Navigation/Navbar";
import Generate from "@/components/Pages/Generate/Generate";
import HomeArea from "@/components/Pages/HomeArea/HomeArea";
import React, { useRef } from "react";

export default function Home() {
  const generateRef = useRef(null);

  const handleGenerateClick = () => {
    if (generateRef.current) {
      generateRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="bg-space bg-no-repeat bg-cover bg-opacity-30 h-screen w-screen font-main">
      <Navbar />
      <div className="h-screen w-screen flex items-center justify-center">
        <HomeArea handleGenerateClick={handleGenerateClick} />
      </div>
      <div
        ref={generateRef}
        className="bg-space2 bg-no-repeat bg-cover bg-opacity-30 h-screen w-screen flex items-center justify-center"
      >
        <Generate />
      </div>
    </div>
  );
}
