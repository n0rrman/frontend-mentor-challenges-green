import Image from "next/image";

import logo from "/public/logo.svg";
import compImg from "/public/image-computer.png";
import tabletImg from "/public/image-devices.png";

import bgDesktop from "/public/bg-header-desktop.png";

import blackWorklist from "/public/icon-blacklist.svg";
import previewWorklist from "/public/icon-preview.svg";
import textWorklist from "/public/icon-text.svg";

import googleLogo from "/public/logo-google.png";
import ibmLogo from "/public/logo-ibm.png";
import microsoftLogo from "/public/logo-microsoft.png";
import hpLogo from "/public/logo-hp.png";
import vgLogo from "/public/logo-vector-graphics.png";

import fbIcon from "/public/icon-facebook.svg";
import xIcon from "/public/icon-twitter.svg";
import igIcon from "/public/icon-instagram.svg";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-[1.1275rem] text-center text-grayishBlue space-y-20 py-6 md:py-8">
        <div className="absolute inset-0 flex items-start justify-start w-full h-full ">
          <div className="relative w-full h-[23rem]">
            <Image src={bgDesktop} className="object-cover" fill alt="" />
          </div>
        </div>
        <section className="flex flex-col justify-center items-center z-20 gap-2.5 py-[1.23rem] max-w-[45rem] px-8 sm:px-0">
          <Image width={125} height={125} alt="logo" src={logo} />
          <h1 className="text-[1.9rem] sm:text-[2.775rem] font-semibold text-darkGrayishBlue pt-10">
            A history of everything you copy
          </h1>

          <p className="text-[0.99rem] sm:text-[1.275rem]">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="flex flex-col md:flex-row text-white/80 font-semibold gap-4 py-10 w-full sm:w-max">
            <button className="bg-strongCyan hover:bg-opacity-80 transition-all shadow-xl shadow-strongCyan/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for iOS
            </button>
            <button className="bg-lightBlue hover:bg-opacity-80 transition-all shadow-xl shadow-lightBlue/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for Mac
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-4 py-1.5">
          <h1 className="text-[2.175rem] font-semibold text-darkGrayishBlue">
            Keep track of your snippets
          </h1>
          <p className="max-w-[45rem] leading-7 text-[1.15rem]">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-[4.25rem]">
            <div className="relative w-10  md:w-[47rem] aspect-[1.3146853147] overflow-hidden">
              <Image
                className="translate-x-0 md:-translate-x-8 2xl:translate-x-0"
                src={compImg}
                fill
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-[3.6rem] text-[1rem] md:text-left pl-0 md:pl-[5.4rem] pt-[4.6rem] text-center">
              <div className="space-y-3">
                <h2 className="text-[1.45rem] leading-6 font-semibold text-darkGrayishBlue">
                  Quick Search
                </h2>
                <p className="max-w-[22rem] leading-[1.85rem]">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-[1.45rem] leading-6 font-semibold text-darkGrayishBlue">
                  iCloud Sync
                </h2>
                <p className="max-w-[22rem] leading-[1.85rem]">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-[1.45rem] leading-6 font-semibold text-darkGrayishBlue">
                  Complete History
                </h2>
                <p className="max-w-[22rem] leading-[1.85rem]">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-4 pt-[3.9rem]">
          <h1 className="text-[2.175rem] font-semibold text-darkGrayishBlue">
            Access Clipboard anywhere
          </h1>
          <p className="max-w-[45rem] text-[1.15rem] leading-[1.85rem] mb-[5.25rem]">
            Whether you&apos;re on the go, or at your computer, you can access
            all your Clipboard snippets in a few simple clicks.
          </p>
          <div className="flex justify-center items-center relative w-full h-20 md:w-[56.5rem] md:h-[36rem] translate-x-0.5">
            <Image src={tabletImg} fill alt="" />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-4">
          <h1 className="text-[2.175rem] font-semibold text-darkGrayishBlue -mt-3">
            Supercharge your workflow
          </h1>

          <p className="text-[1.15rem]">
            We&apos;ve got the tools to boost your productivity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6 pt-9 mt-0.5 pb-[8.6rem] px-[10rem] text-[0.97rem] leading-[1.9rem]">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative w-11 h-10 m-5">
                <Image src={blackWorklist} fill alt="" />
              </div>
              <h2 className="text-[1.45rem] font-semibold text-darkGrayishBlue pt-1">
                Create blacklists
              </h2>
              <p className="tracking-wide">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative w-10 h-10 m-5">
                <Image className="py-1 px-0.5" src={textWorklist} fill alt="" />
              </div>
              <h2 className="text-[1.45rem] font-semibold text-darkGrayishBlue pt-1">
                Plain text snippets
              </h2>

              <p className="tracking-wide">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative w-12 h-10 m-5">
                <Image className="py-1" src={previewWorklist} fill alt="" />
              </div>
              <h2 className="text-[1.45rem] font-semibold text-darkGrayishBlue pt-1">
                Sneak preview
              </h2>
              <p className="tracking-wide">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[6rem] justify-center items-center pt-1 pb-[4.6rem]">
            <div className="relative w-[165px] h-[49px]">
              <Image src={googleLogo} fill alt="" />
            </div>
            <div className="relative w-[139px] h-[51px]">
              <Image src={ibmLogo} fill alt="" />
            </div>
            <div className="relative w-[161px] h-[35px]">
              <Image src={microsoftLogo} fill alt="" />
            </div>
            <div className="relative w-[135px] h-[56px]">
              <Image src={hpLogo} fill alt="" />
            </div>
            <div className="relative w-[125px] h-[30px]">
              <Image src={vgLogo} fill alt="" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center z-20 gap-4 max-w-[45rem] pb-8">
          <h1 className="text-[2.2rem] font-semibold text-darkGrayishBlue">
            Clipboard for iOS and Mac OS
          </h1>

          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you&apos;re ready to start adding to your clipboard.
          </p>

          <div className="flex flex-col md:flex-row text-white/90 font-semibold gap-4 pt-9 pb-10">
            <button className="bg-strongCyan hover:bg-opacity-80 transition-all shadow-xl shadow-strongCyan/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for iOS
            </button>
            <button className="bg-lightBlue hover:bg-opacity-80 transition-all shadow-xl shadow-lightBlue/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for Mac
            </button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col md:flex-row gap-[8.5rem] text-darkGrayishBlue/80 text-[1.1rem] items-center justify-center bg-grayishBlue/10 py-10 px-0 md:px-[10.3rem] mt-12">
        <div className="-translate-y-1">
          <Image width={54} height={54} alt="logo" src={logo} />
        </div>
        <div className="grid gap-x-[4.8rem] text-left gap-y-4 grid-flow-col grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 mr-0 md:mr-auto">
          <div className="w-max">FAQs</div>
          <div className="w-max">Contact Us</div>
          <div className="w-max">Privacy Policy</div>
          <div className="w-max">Press Kit</div>
          <div className="w-max">Install Guide</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <div className="relative w-6 h-6">
            <Image src={fbIcon} fill alt="" />
          </div>
          <div className="relative w-6 h-5">
            <Image src={xIcon} fill alt="" />
          </div>
          <div className="relative w-6 h-6">
            <Image src={igIcon} fill alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
