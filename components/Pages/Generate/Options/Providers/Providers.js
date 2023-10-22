import React from "react";
import Provider from "./Provider";

const Providers = ({ providers, selected, setSelected }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full w-full text-white">
      <div className="text-3xl font-bold">Select a Provider</div>
      <div className="flex flex-row items-center justify-center gap-8">
        {providers.map((provider, index) => (
          <Provider
            onClick={(e) => {
              if (index === selected) setSelected(-1);
              else setSelected(index);
            }}
            key={provider.name}
            name={provider.name}
            logo={provider.logo}
            selected={providers[selected] == provider}
          />
        ))}
      </div>
    </div>
  );
};

export default Providers;
