import React from "react";
import APIField from "../HomeArea/APIField/APIField";
import Button from "@/components/Utilities/Buttons/Button";
import Options from "./Options/Options";
const Generate = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-2/3 h-2/3 text-white">
      <Options />
      <div className="flex flex-col items-center justify-center gap-8 w-3/4">
        <APIField />
        <Button text="Create Endpoint!" theme="dark" />
      </div>
    </div>
  );
};

export default Generate;
