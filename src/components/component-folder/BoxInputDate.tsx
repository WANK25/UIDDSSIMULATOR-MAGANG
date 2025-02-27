import React from "react";
import InputTime from "./sub-component-folder/InputDate";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "./sub-component-folder/Button";

interface Props {}

function BoxInputDate(props: Props) {
  const {} = props;

  return (
    <div className="p-2 flex h-10 gap-2.5 w-[308px] bg-blackDDS rounded-lg justify-center items-center">
      <InputTime />
      <div className="border border-white w-4 h-fit"></div>
      <InputTime />
      <Button
        icon={<FaRegTrashAlt className="text-white w-4 h-4" />}
        className=" border-redDDS bg-redDDS"
      />
    </div>
  );
}

export default BoxInputDate;
