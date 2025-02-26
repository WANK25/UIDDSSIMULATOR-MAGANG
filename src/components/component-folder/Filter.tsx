import React from "react";
import { FaAngleRight } from "react-icons/fa";

function Filter() {
  return (
    <div className="flex font-bold  items-center text-white gap-2">
      <p>Filter : </p>
      <div className="p-2 bg-blackDDS rounded-lg flex justify-end items-center">
        <p className="font-medium text-base w-[320px]">Your topiccc</p>
        <FaAngleRight className="w-[15px] " />
      </div>

      <div className="p-2 bg-blackDDS rounded-lg flex justify-end items-center gap-10 ">
        <p className="font-medium text-base">Status</p>
        <FaAngleRight className="w-[15px] " />
      </div>
    </div>
  );
}

export default Filter;
