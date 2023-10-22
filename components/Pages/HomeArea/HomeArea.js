import React from "react";
import APIField from "./APIField/APIField";
import Button from "@/components/Utilities/Buttons/Button";
import Hero from "./Hero/Hero";

const HomeArea = () => {
  return (
    <div className="text-white w-2/3 h-3/4 mt-20 flex flex-col items-center justify-center">
      <div className="w-full h-2/3 ">
        <Hero />
      </div>
      <div className="w-full h-1/3 flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-row gap-5 items-center justify-center">
          <Button text="Generate" theme="dark" className="text-xl px-10 py-2" />
          <Button
            text="Learn More.."
            theme="transperent"
            className="text-xl px-10 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeArea;
