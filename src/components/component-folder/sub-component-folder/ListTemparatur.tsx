import React from "react";
import Button from "./Button";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt, FaRegPlayCircle } from "react-icons/fa";

interface TemperaturData {
  id: number;
  topic: string;
}

interface ListTemparaturProps {
  dataTemparatur: TemperaturData[];
}

function ListTemparatur({ dataTemparatur }: ListTemparaturProps) {
  return (
    <>
      {dataTemparatur.map((data) => (
        <div
          key={data.id}
          className="flex px-3 py-[6px] bg-blackDDS rounded-[4px] gap-1 justify-center items-center w-[329px] h-[44px]"
        >
          <p className="font-semibold text-[12px] text-white w-[198px] truncate">
            {data.topic}
          </p>

          <Button
            icon={<FaRegPlayCircle className="text-greenDDS w-4 h-4" />}
            className="text-greenDDS border-greenDDS bg-primary"
          />
          <Button
            icon={<CiEdit className="text-greenDDS w-4 h-4" />}
            className="text-greenDDS border-greenDDS bg-primary"
          />
          <Button
            icon={<FaRegTrashAlt className="text-white w-4 h-4" />}
            className="border-redDDS bg-redDDS"
          />
        </div>
      ))}
    </>
  );
}

export default ListTemparatur;
