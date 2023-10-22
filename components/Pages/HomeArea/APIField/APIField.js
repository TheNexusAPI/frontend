"use client";
import React from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { FiCopy } from "react-icons/fi";

const APIField = ({ text }) => {
  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className="w-full items-center justify-center flex ">
      <div className="bg-white drop-shadow-2xl flex items-center justify-end text-black w-3/4 py-2 pr-2 h-9 text-lg rounded-2xl text-md cursor-pointer">
        <span className="px-8">{text}</span>
        <div>
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
