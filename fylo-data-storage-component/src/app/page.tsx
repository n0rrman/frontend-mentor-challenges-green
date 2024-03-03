import Image from "next/image";

import FyloLoadingBar from "./components/fylo-loading-bar";

import logo from "/public/logo.svg";
import documentIcon from "/public/icon-document.svg";
import folderIcon from "/public/icon-folder.svg";
import uploadIcon from "/public/icon-upload.svg";
import bgMobile from "/public/bg-mobile.png";
import bgDesktop from "/public/bg-desktop.png";

export default function Home() {
  const min_storage = 0;
  const max_storage = 1000;
  const used_storage = 815;
  const remaining_storage = max_storage - used_storage;

  return (
    <main className="flex justify-center items-center min-h-screen px-6">
      <div className="absolute bottom-0 w-full h-screen z-0">
        <picture className="w-auto h-auto">
          <source media="(min-width: 60rem)" srcSet={bgDesktop.src} />
          <img
            className=" absolute bottom-0 w-[100vw] h-[1/2] object-cover"
            src={bgMobile.src}
            alt=""
          />
        </picture>
      </div>
      <section className="flex flex-col w-full items-center justify-center md:flex-row gap-4 sm:gap-[1.875rem] z-10 translate-y-0 sm:-translate-y-2.5">
        <div className="flex flex-col justify-center items-start p-10 bg-darkBlue shadow-2xl rounded-lg rounded-tr-[6.4em] gap-[2.05rem] max-w-[21.875rem] w-full">
          <div className="relative w-[8.4375rem] h-[2.5rem]">
            <Image src={logo} alt="" fill />
          </div>
          <div className="flex flex-row gap-4">
            <button
              aria-label="document"
              className="bg-veryDarkBlue rounded-lg p-3 w-12 h-12"
            >
              <div className="mx-auto relative h-full aspect-[0.833]">
                <Image src={documentIcon} alt="" fill />
              </div>
            </button>
            <button
              aria-label="folder"
              className="bg-veryDarkBlue rounded-lg p-3 w-12 h-12"
            >
              <div className="relative w-full aspect-[1.2]">
                <Image src={folderIcon} alt="" fill />
              </div>
            </button>
            <button
              aria-label="upload"
              className="bg-veryDarkBlue rounded-lg p-3 w-12 h-12"
            >
              <div className="relative w-full aspect-[1.5]">
                <Image src={uploadIcon} alt="" fill />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-col self-end items-center sm:items-end w-full max-w-[33.75rem]">
          <div className="relative bg-white w-fit py-1.5 px-6 rounded-xl -mt-6 -mb-0 md:mt-0 sm:-mb-6 z-20 mr-0 md:mr-10">
            <div className="flex flex-row justify-center items-center">
              <span className="text-veryDarkBlue text-[2.5rem] font-bold pr-2">
                {remaining_storage}
              </span>
              <span className="text-grayishBlue tracking-widest text-xs uppercase font-bold z-20">
                GB Left
              </span>
            </div>
            <div className="hidden md:block absolute right-0 bg-white z-10 h-10 w-10 skew-y-[45deg] bottom-0"></div>
          </div>
          <div className="flex flex-col gap-0.5 p-10 bg-darkBlue rounded-xl w-full shadow-xl text-xs">
            <div className="pb-2 text-[0.875rem] text-paleBlue/70">
              You&apos;ve used{" "}
              <span className="text-paleBlue">{used_storage} GB</span> of your
              storage
            </div>

            <FyloLoadingBar
              className="my-1.5"
              min={min_storage}
              max={max_storage}
              current={used_storage}
            />

            <div className="flex flex-row justify-between items-center text-paleBlue">
              <div>{min_storage} GB</div>
              <div>{max_storage} GB</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
