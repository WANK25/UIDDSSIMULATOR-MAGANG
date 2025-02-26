import React from "react";
import Button from "./Button";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

import { FaRegPlayCircle } from "react-icons/fa";

function ListTemparatur() {
  return (
    <div className="flex px-3 py-[6px] bg-blackDDS rounded-[4px] gap-1 justify-center items-center">
      <p className="font-semibold text-[12px] text-white w-[198px] truncate">
        home/sensor/temperature/livingdfasdfa
      </p>

      <Button
        icon={<FaRegPlayCircle className="text-greenDDS w-4 h-4" />}
        className=" text-greenDDS  border-greenDDS bg-primary"
      />
      <Button
        icon={<CiEdit className="text-greenDDS w-4 h-4" />}
        className=" text-greenDDS  border-greenDDS bg-primary"
      />

      <Button
        icon={<FaRegTrashAlt className="text-white w-4 h-4" />}
        className=" border-redDDS bg-redDDS"
      />
    </div>
  );
}

export default ListTemparatur;
