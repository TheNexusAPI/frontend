import React from "react";
import Image from "next/image";
const Provider = ({ name, logo, selected, onClick }) => {
  return (
    <>
      {selected ? (
        <div
          onClick={onClick}
          className="flex flex-col items-center justify-center bg-white border-purple-600 border-[6px] h-[120px] w-[120px] rounded-full text-black text-lg cursor-pointer hover:scale-95  transition-all duration-300 "
        >
          <div>
            <Image
              src={`/assets/${logo}`}
              alt={name}
              width={100}
              height={100}
            />
          </div>
        </div>
      ) : (
        <div
          onClick={onClick}
          className="flex flex-col items-center justify-center bg-white h-[120px] w-[120px] rounded-full text-black text-lg cursor-pointer hover:scale-95  transition-all duration-300 "
        >
          <div>
            <Image
              src={`/assets/${logo}`}
              alt={name}
              width={100}
              height={100}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Provider;
