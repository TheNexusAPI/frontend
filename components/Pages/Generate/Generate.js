"use client";
import React, { useState } from "react";
import APIField from "../HomeArea/APIField/APIField";
import Button from "@/components/Utilities/Buttons/Button";
import Options from "./Options/Options";

const convertTextToKey = (text) => {
  if (text === "Spacecrafts") return "spacecrafts";
  else if (text === "Satellites") return "satellites";
  else if (text === "Geomagnetic Storm") return "geomagneticstorm";
  else if (text === "Missions") return "spacex_payload:*";
  else if (text === "Rockets") return "spacex_rockets:*";
  else if (text === "Launchers") return "launchers";
  else if (text === "Space Centers") return "centres";
  else if (text === "Solar Flares") return "solarflares:*";
  else return "invalid";
};

const Generate = () => {
  const [url, setUrl] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleGenerate = async (e) => {
    const parsedTopics = [];
    selectedOptions.forEach((option) => {
      parsedTopics.push(convertTextToKey(option));
    });
    const csv = parsedTopics.join(",");
    setUrl(`api?categories=${csv}`);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-2/3 h-3/4 text-white">
      <Options
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <div className="flex flex-col items-center justify-center gap-8 w-3/4">
        <APIField text={url} />
        <Button text="Create Endpoint!" theme="dark" onClick={handleGenerate} />
      </div>
    </div>
  );
};

export default Generate;
