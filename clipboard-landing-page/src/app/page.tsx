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
      <main className="flex flex-col items-center justify-center text-[1.125rem] text-center text-grayishBlue space-y-20 py-8">
        <div className="absolute inset-0 flex items-start justify-start w-full h-full ">
          <div className="relative w-full h-[23rem]">
            <Image src={bgDesktop} className="object-cover" fill alt="" />
          </div>
        </div>
        <section className="flex flex-col justify-center items-center z-20 gap-2.5 py-[1.23rem] max-w-[45rem]">
          <Image width={125} height={125} alt="logo" src={logo} />
          <h1 className="text-[2.8rem] font-semibold text-darkGrayishBlue pt-10">
            A history of everything you copy
          </h1>

          <p className="text-[1.275rem]">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="flex flex-row text-white/90 font-semibold gap-4 py-10">
            <button className="bg-strongCyan shadow-xl shadow-strongCyan/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for iOS
            </button>
            <button className="bg-lightBlue shadow-xl shadow-lightBlue/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for Mac
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-4 py-1.5">
          <h1 className="text-[2.2rem] font-semibold text-darkGrayishBlue">
            Keep track of your snippets
          </h1>
          <p className="max-w-[45rem] leading-7">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div className="flex flex-row gap-10 py-16">
            <div className="relative w-[67.5rem] aspect-[1.3146853147] overflow-hidden">
              <Image className="-translate-x-7" src={compImg} fill alt="" />
            </div>
            <div className="flex flex-col gap-2 text-left p-16">
              <h2 className="text-2xl font-semibold text-darkGrayishBlue">
                Quick Search
              </h2>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
              <h2 className="text-2xl font-semibold text-darkGrayishBlue">
                iCloud Sync
              </h2>
              <p>Instantly saves and syncs snippets across all your devices.</p>
              <h2 className="text-2xl font-semibold text-darkGrayishBlue">
                Complete History
              </h2>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-4">
          <h1 className="text-4xl font-semibold text-darkGrayishBlue">
            Access Clipboard anywhere
          </h1>
          <p>
            Whether you&apos;re on the go, or at your computer, you can access
            all your Clipboard snippets in a few simple clicks.
          </p>
          <div className="relative w-[40rem] h-[20rem]">
            <Image src={tabletImg} fill alt="" />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-8">
          <h1 className="text-4xl font-semibold text-darkGrayishBlue">
            Supercharge your workflow
          </h1>

          <p>We&apos;ve got the tools to boost your productivity.</p>

          <div className="grid grid-cols-3 py-8">
            <div className="flex flex-col gap-5 items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src={blackWorklist} fill alt="" />
              </div>
              <h2 className="text-2xl font-semibold text-darkGrayishBlue">
                Create blacklists
              </h2>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src={textWorklist} fill alt="" />
              </div>
              <h2 className="text-2xl font-semibold text-darkGrayishBlue">
                Plain text snippets
              </h2>

              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src={previewWorklist} fill alt="" />
              </div>
              <h2 className="text-2xl font-semibold text-darkGrayishBlue">
                Sneak preview
              </h2>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-5 w-full gap-10">
            <div className="relative w-auto h-10">
              <Image src={googleLogo} fill alt="" />
            </div>
            <div className="relative w-auto h-10">
              <Image src={ibmLogo} fill alt="" />
            </div>
            <div className="relative w-auto h-10">
              <Image src={microsoftLogo} fill alt="" />
            </div>
            <div className="relative w-auto h-10">
              <Image src={hpLogo} fill alt="" />
            </div>
            <div className="relative w-auto h-10">
              <Image src={vgLogo} fill alt="" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center z-20 gap-8 max-w-[45rem] pb-8">
          <h1 className="text-3xl font-semibold text-darkGrayishBlue">
            Clipboard for iOS and Mac OS
          </h1>

          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you&apos;re ready to start adding to your clipboard.
          </p>

          <div className="flex flex-row text-white/90 font-semibold gap-4 py-10">
            <button className="bg-strongCyan shadow-xl shadow-strongCyan/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for iOS
            </button>
            <button className="bg-lightBlue shadow-xl shadow-lightBlue/20 tracking-wide rounded-[2rem] py-[0.8rem] px-[2.2rem] border border-b-[3px] border-black/10">
              Download for Mac
            </button>
          </div>
        </section>
      </main>
      <footer className="flex flex-row gap-[8.5rem] text-darkGrayishBlue/80 text-[1.1rem] items-center justify-center bg-grayishBlue/10 py-10 px-[10.3rem] mt-12">
        <div className="-translate-y-1">
          <Image width={54} height={54} alt="logo" src={logo} />
        </div>
        <div className="grid gap-x-[4.8rem] gap-y-4 grid-flow-col grid-cols-3 grid-rows-2 mr-auto">
          <div>FAQs</div>
          <div>Contact Us</div>
          <div>Privacy Policy</div>
          <div>Press Kit</div>
          <div>Install Guide</div>
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
