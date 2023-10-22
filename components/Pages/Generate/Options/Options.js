"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import Providers from "./Providers/Providers";
import { ProviderOptions } from "./Providers/ProviderOptions";

const Options = ({ selectedOptions, setSelectedOptions }) => {
  const [selectedProvider, setSelectedProvider] = useState(-1);

  const providers = [
    {
      name: "ISRO",
      logo: "isro-logo.png",
      options: ["Spacecrafts", "Launchers", "Satellites", "Space Centers"],
    },
    {
      name: "NASA",
      logo: "nasa-logo.png",
      options: ["Solar Flares", "Geomagnetic Storm"],
    },
    {
      name: "SpaceX",
      logo: "spacex-logo.png",
      options: ["Rockets", "Missions"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-10">
      <Providers
        providers={providers}
        selected={selectedProvider}
        setSelected={setSelectedProvider}
      />
      <AnimatePresence mode="wait">
        {selectedProvider !== -1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full bg-white overflow-hidden rounded-xl"
          >
            <ProviderOptions
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              provider={providers[selectedProvider]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Options;
