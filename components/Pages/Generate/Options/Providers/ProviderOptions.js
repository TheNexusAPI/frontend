import Option from "../Option";
export const ProviderOptions = ({
  provider,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <div className="w-1/2 h-3/4 bg-white rounded text-black">
      <div className="flex flex-col items-start justify-center py-5 px-10 w-full">
        {provider.name === "ISRO" ? (
          <span className="bg-gradient-to-r from-[#13588a] via-[#0f9b4a] to-[#fcb316] inline-block text-transparent bg-clip-text text-4xl font-black pb-4">
            {provider.name}
          </span>
        ) : provider.name === "NASA" ? (
          <span className="bg-gradient-to-r from-[#fc3c3c] to-[#0055ff] via-[#fc3c3c] inline-block text-transparent bg-clip-text text-4xl font-black pb-4">
            {provider.name}
          </span>
        ) : (
          <span className="bg-gradient-to-r from-[#1a73e8] to-[#0effff] via-[#0d6efd] inline-block text-transparent bg-clip-text text-4xl font-black pb-4">
            {provider.name}
          </span>
        )}
        <div className="grid grid-cols-2 gap-5 w-full">
          {provider.options.map((option) => (
            <Option
              setSelectedOptions={setSelectedOptions}
              selectedOptions={selectedOptions}
              key={option}
              text={option}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
