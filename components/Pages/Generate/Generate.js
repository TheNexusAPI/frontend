"use client";
import React, { useState } from "react";
import APIField from "../HomeArea/APIField/APIField";
import Button from "@/components/Utilities/Buttons/Button";
import Options from "./Options/Options";
import generateRandomURL from "@/utils/random";

const Generate = () => {
  const [url, setUrl] = useState("");

  const handleGenerate = (e) => {
    const randomURL = generateRandomURL();
    setUrl(randomURL);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-2/3 h-3/4 text-white">
      <Options />
      <div className="flex flex-col items-center justify-center gap-8 w-3/4">
        <APIField text={url} />
        <Button text="Create Endpoint!" theme="dark" onClick={handleGenerate} />
      </div>
    </div>
  );
};

export default Generate;
