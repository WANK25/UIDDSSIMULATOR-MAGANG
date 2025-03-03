import React from "react";
import ListTemparatur from "./sub-component-folder/ListTemparatur";

function BoxListTemparatur({ dataTemparatur }) {
  return (
    <div className="h-[376px] flex flex-col gap-2 overflow-y-auto pr-2 w-[341px] scrollbar-thin">
      <ListTemparatur dataTemparatur={dataTemparatur} />
    </div>
  );
}

export default BoxListTemparatur;
