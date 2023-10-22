"use client";
import React from "react";
import { useState } from "react";
import Providers from "./Providers/Providers";
import { ProviderOptions } from "./Providers/ProviderOptions";
const Options = () => {
  const [selectedProvider, setSelectedProvider] = useState(-1);
  const providers = [
    {
      name: "ISRO",
      logo: "isro-logo.png",
      options: [
        "Spacecrafts",
        "Stations",
        "Launchers",
        "Temperatures",
        "Astronomy",
        "Astrophysics",
      ],
    },
    {
      name: "NASA",
      logo: "nasa-logo.png",
      options: [
        "Missions",
        "Astronauts",
        "Telescopes",
        "Planets",
        "Stars",
        "Galaxies",
        "Moon",
        "Mars",
        "Solar System",
      ],
    },
    {
      name: "Google Earth",
      logo: "google-earth-logo.png",
      options: [
        "Satellite imagery",
        "3D models",
        "Street view",
        "Maps",
        "Terrain",
        "Climate",
      ],
    },
  ];

  return (
    <div className="h-full w-full">
      <Providers
        providers={providers}
        selected={selectedProvider}
        setSelected={setSelectedProvider}
      />
      <ProviderOptions provider={providers[selectedProvider]} />
    </div>
  );
};

export default Options;
