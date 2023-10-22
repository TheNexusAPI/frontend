import React from "react";

const Option = ({ text, selectedOptions, setSelectedOptions }) => {
  const handleSelect = (e) => {
    if (selectedOptions.includes(text))
      setSelectedOptions((old) => old.filter((each) => each !== text));
    else setSelectedOptions((old) => [...old, text]);
  };
  return (
    <>
      {selectedOptions.includes(text) ? (
        <div
          onClick={handleSelect}
          className="bg-green-500 text-white text-lg rounded flex items-center justify-center px-2 py-1 cursor-pointer hover:scale-95 transition-all duration-300"
        >
          {text}
        </div>
      ) : (
        <div
          onClick={handleSelect}
          className="bg-gray-100 text-lg rounded flex items-center justify-center px-2 py-1 cursor-pointer hover:scale-95 transition-all duration-300"
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Option;
