"use client";
import Navbar from "@/components/Navigation/Navbar";
import Generate from "@/components/Pages/Generate/Generate";
import HomeArea from "@/components/Pages/HomeArea/HomeArea";
import React, { useRef } from "react";

export default function Home() {
  const generateRef = useRef(null);
  const homeRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleNavigation = (e) => {
    switch (e.target.innerText) {
      case "NexusAPI":
        console.log("Going to..");
        scrollTo(homeRef);
        break;
      case "Home":
        console.log("Going home");
        scrollTo(homeRef);
        break;
      case "Documentation":
        window.open(
          "https://app.theneo.io/70f5220e-c77a-4e13-9948-b2c86694ebd5/nexusapi/nexusapi-documentation",
          "_blank"
        );
        break;
      case "Pricing":
        break;
      case "About Us":
        break;
      default:
        break;
    }
  };

  const handleGenerateClick = () => {
    scrollTo(generateRef);
  };

  return (
    <div className="bg-space bg-no-repeat bg-cover bg-opacity-30 h-screen w-screen font-main">
      <Navbar handleNavigation={handleNavigation} />
      <div
        ref={homeRef}
        className="h-screen w-screen flex items-center justify-center"
      >
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
