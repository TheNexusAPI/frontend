"use client";
import React from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { FiCopy } from "react-icons/fi";

const APIField = ({ text }) => {
  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = `https://thenexusapi.com/${text}`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full">
      <div className="text-4xl font-semibold bg-gradient-to-r from-[#a059e6] via-[#5df4ff] to-[#c1efff] inline-block text-transparent bg-clip-text">
        thenexusapi.com/
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-2 py-1 pr-2 rounded-2xl bg-white ">
        <div className="overflow-scroll drop-shadow-2xl flex items-center text-black w-full  cursor-pointer whitespace-pre">
          <span className="px-8 w-full">{text}</span>
        </div>
        <div className="bg-white p-1 rounded-full">
          <Tooltip onClick={handleCopyClick} title="Copy">
            <IconButton>
              <FiCopy />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default APIField;
