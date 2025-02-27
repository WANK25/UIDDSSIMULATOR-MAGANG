import { IoCloseSharp } from "react-icons/io5";
import BoxName from "./component-folder/BoxName";
import BoxSubcriptions from "./component-folder/BoxSubcriptions";
import BoxListTemparatur from "./component-folder/BoxListTemparatur";
import Search from "./component-folder/sub-component-folder/Search";
import Filter from "./component-folder/Filter";
import ButtonTextIcon from "./component-folder/sub-component-folder/ButtonTextIcon";

function OpenDdsSimulator() {
  return (
    <div className="container font-display  bg-primary py-4 px-3 flex flex-col gap-2 w-[1280px] h-[720px] rounded-xl">
      <div className=" flex justify-between ">
        <h1
          className="text-white font-bold text-xl
        "
        >
          Open DDS Simulator
        </h1>
        <IoCloseSharp className="text-white w-6 h-6" />
      </div>
      <div className="flex w-[1248px] gap-4">
        <div className="flex flex-col gap-4 w-[361px]">
          <div className="bg-secondary px-3 py-4 rounded-xl flex justify-center items-center text-white h-20">
            <BoxName />
          </div>
          <div className="bg-secondary rounded-xl flex-1 flex flex-col gap-4 p-4">
            <BoxSubcriptions />
            <BoxListTemparatur />
          </div>
        </div>
        <div className="p-4 bg-secondary rounded-xl flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <Filter />
            <Search />
            <div className="bg-blackDDS h-[465px]"></div>
            <div className="flex justify-end">
              <ButtonTextIcon
                className=" bg-redDDS w-32"
                text={"Clear Table"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenDdsSimulator;
