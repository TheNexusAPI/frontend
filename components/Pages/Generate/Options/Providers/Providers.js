import React from "react";
import Provider from "./Provider";

const Providers = ({ providers, selected, setSelected }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 h-full w-full">
      {providers.map((provider, index) => (
        <Provider
          onClick={(e) => setSelected(index)}
          key={provider.name}
          name={provider.name}
          logo={provider.logo}
          selected={providers[selected] == provider}
        />
      ))}
    </div>
  );
};

export default Providers;
