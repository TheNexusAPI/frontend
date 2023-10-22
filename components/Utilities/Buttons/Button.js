import React from "react";

const Button = ({ text, theme = "dark", onClick }) => {
  return (
    <>
      {theme == "dark" ? (
        <button
          onClick={onClick}
          className="bg-purple-500 px-8 py-3 text-xl font-medium rounded-full btn relative inline-flex items-center justify-start overflow-hidden transition-all   group"
        >
          <span className="w-0 h-full rounded bg-white  absolute left-0 ease-out duration-1000 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full transition-colors duration-300 ease-in-out group-hover:text-black z-10">
            {text}
          </span>
        </button>
      ) : theme == "transperent" ? (
        <button
          onClick={onClick}
          className="bg-white text-black font-medium px-8 py-3 text-xl  rounded-full btn relative inline-flex items-center justify-start overflow-hidden transition-all  group"
        >
          <span className="w-0 h-full rounded bg-purple-500 absolute left-0 ease-out duration-1000 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            {text}
          </span>
        </button>
      ) : (
        <button
          onClick={onClick}
          className="bg-white text-black px-8 py-3 text-xl rounded-full "
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
