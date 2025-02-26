import React from "react";
import ListTemparatur from "./sub-component-folder/ListTemparatur";

function BoxListTemparatur() {
  return (
    <div className="h-[376px] flex flex-col gap-2 overflow-y-auto custom-scrollbar pr-2">
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
      <ListTemparatur />
    </div>
  );
}

export default BoxListTemparatur;
