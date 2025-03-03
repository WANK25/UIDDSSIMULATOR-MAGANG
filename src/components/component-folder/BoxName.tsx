import React from "react";
import PowerOnOff from "./sub-component-folder/PowerOnOff";
import Button from "./sub-component-folder/Button";
import { BiSave } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CgPlayPauseO } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";

import { FaRegPlayCircle } from "react-icons/fa";

function BoxName() {
  return (
    <div className="flex w-[329px] h-[56px] items-end justify-end gap-2 text-base font-semibold">
      <div className="flex flex-col gap-1">
        <p>Name</p>
        <div className="h-8 w-[150px] px-[10px] py-2 font-medium text-base bg-blackDDS rounded-[10px] flex items-center justify-start">
          <p>No Data</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p>Start</p>
        <PowerOnOff />
      </div>
      <Button
        icon={<BiSave className="text-greenDDS w-4 h-4" />}
        className=" text-greenDDS  border-greenDDS bg-primary"
      />

      <Button
        icon={<MdOutlineFileUpload className="text-greenDDS w-4 h-4" />}
        className=" text-greenDDS  border-greenDDS bg-primary"
      />
    </div>
  );
}

export default BoxName;
