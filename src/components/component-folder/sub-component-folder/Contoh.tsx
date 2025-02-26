import { BiSave } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CgPlayPauseO } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";

import { FaRegPlayCircle } from "react-icons/fa";

import Button from "./Button";
import Search from "./Search";
import PowerOnOff from "./PowerOnOff";
import ButtonTextIcon from "./ButtonTextIcon";
import { AiOutlinePlusCircle } from "react-icons/ai";

function OpenDdsSimulator() {
  return (
    <div className="container bg-primary py-2 px-3 flex flex-col gap-2 w-[1280px] h-[720px] rounded-xl">
      <div className=" flex justify-between ">
        <h1 className="text-white">Open DDS Simulator</h1>
        <p className="text-white">X</p>
      </div>
      <div className="grid grid-cols-[361px_auto] gap-3 w-full h-full">
        <div className="flex flex-col gap-3">
          <div className="p-10 bg-secondary rounded-xl flex gap-2">
            <Button
              icon={<BiSave className="text-greenDDS w-4 h-4" />}
              className=" text-greenDDS  border-greenDDS bg-primary"
            />

            <Button
              icon={<MdOutlineFileUpload className="text-greenDDS w-4 h-4" />}
              className=" text-greenDDS  border-greenDDS bg-primary"
            />

            <Button
              icon={<CiEdit className="text-greenDDS w-4 h-4" />}
              className=" text-greenDDS  border-greenDDS bg-primary"
            />

            <Button
              icon={<FaRegPlayCircle className="text-greenDDS w-4 h-4" />}
              className=" text-greenDDS  border-greenDDS bg-primary"
            />

            <Button
              icon={<CgPlayPauseO className="text-redDDS w-4 h-4" />}
              className=" border-redDDS bg-primary"
            />

            <Button
              icon={<FaRegTrashAlt className="text-white w-4 h-4" />}
              className=" border-redDDS bg-redDDS"
            />
          </div>
          <div className="p-10 bg-secondary rounded-xl flex-1 flex flex-col gap-2">
            <Search />
            <PowerOnOff />
            <ButtonTextIcon
              icon={<AiOutlinePlusCircle className="text-white w-4 h-4" />}
              className=" bg-greenDDS w-32"
              text={"Add Topic"}
            />
          </div>
        </div>
        <div className="p-10 bg-secondary rounded-xl"></div>
      </div>
    </div>
  );
}

export default OpenDdsSimulator;
