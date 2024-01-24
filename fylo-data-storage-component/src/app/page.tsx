import Image from "next/image";

import FyloLoadingBar from "./components/fylo-loading-bar";

import logo from "/public/logo.svg";
import documentIcon from "/public/icon-document.svg";
import folderIcon from "/public/icon-folder.svg";
import uploadIcon from "/public/icon-upload.svg";

export default function Home() {
  const min_storage = 0;
  const max_storage = 1000;
  const used_storage = 815;
  const remaining_storage = max_storage - used_storage;

  return (
    <div className="flex justify-center items-center min-h-screen bg-veryDarkBlue">
      <main className="flex flex-row gap-5">
        <div className="flex flex-col bg-darkBlue rounded-xl pr-20 rounded-tr-[5rem] gap-5 p-8">
          <div className="relative w-[8.4375rem] h-[2.5rem]">
            <Image src={logo} alt="" fill />
          </div>
          <div className="flex flex-row gap-3">
            <button className="bg-veryDarkBlue rounded-lg p-3 w-12 h-12">
              <div className="relative w-full h-full">
                <Image src={documentIcon} alt="" fill />
              </div>
            </button>
            <button className="bg-veryDarkBlue rounded-lg p-3 w-12 h-12">
              <div className="relative w-full h-full">
                <Image src={folderIcon} alt="" fill />
              </div>
            </button>
            <button className="bg-veryDarkBlue rounded-lg p-3 w-12 h-12">
              <div className="relative w-full h-full">
                <Image src={uploadIcon} alt="" fill />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col self-end items-end">
          <div className="bg-white w-fit p-3.5 rounded-xl -mb-6 z-10">
            <div className="">
              <span className="text-veryDarkBlue text-3xl font-bold pr-2">
                {remaining_storage}
              </span>
              <span className="text-grayishBlue text-xs uppercase font-bold">
                GB Left
              </span>
            </div>
            <div className=""></div>
          </div>
          <div className="p-8 bg-darkBlue text-white rounded-xl">
            <div>You've used {used_storage} GB of your storage</div>

            <FyloLoadingBar
              min={min_storage}
              max={max_storage}
              current={used_storage}
            />

            <div className="flex flex-row justify-between items-center font-bold">
              <div>{min_storage} GB</div>
              <div>{max_storage} GB</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}