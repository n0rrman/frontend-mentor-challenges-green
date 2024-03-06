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
      <main className="text-[1.125rem] text-center text-grayishBlue space-y-28">
        <div className="absolute inset-0 flex items-start justify-start w-full h-full ">
          <div className="relative w-full h-1/3">
            <Image src={bgDesktop} className="object-cover" fill alt="" />
          </div>
        </div>
        <section className="flex flex-col justify-center items-center z-20 gap-4">
          <Image width={125} height={125} alt="logo" src={logo} />
          <h1 className="text-5xl font-semibold text-darkGrayishBlue">
            A history of everything you copy
          </h1>

          <p>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="flex flex-row text-white font-semibold gap-4">
            <button className="bg-strongCyan rounded-3xl py-2 px-5">
              Download for iOS
            </button>
            <button className="bg-lightBlue rounded-3xl py-2 px-5">
              Download for Mac
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center z-20 gap-4">
          <h1 className="text-4xl font-semibold text-darkGrayishBlue">
            Keep track of your snippets
          </h1>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div className="flex flex-row gap-10">
            <div className="relative w-full h-auto">
              <Image src={compImg} fill alt="" />
            </div>
            <div className="flex flex-col gap-2 text-left">
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
        </section>
        <section className="flex flex-col justify-center items-center z-20 gap-8">
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

          <h1 className="text-3xl font-semibold text-darkGrayishBlue">
            Clipboard for iOS and Mac OS
          </h1>

          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you&apos;re ready to start adding to your clipboard.
          </p>

          <div className="flex flex-row text-white font-semibold gap-4">
            <button className="bg-strongCyan rounded-3xl py-2 px-5">
              Download for iOS
            </button>
            <button className="bg-lightBlue rounded-3xl py-2 px-5">
              Download for Mac
            </button>
          </div>
        </section>
      </main>
      <footer className="flex flex-row gap-20 items-center justify-center bg-grayishBlue/10 p-10 mt-12">
        <div>
          <Image width={45} height={45} alt="logo" src={logo} />
        </div>
        <div className="grid gap-x-10 grid-flow-col grid-cols-3 grid-rows-2 mr-auto">
          <div>FAQs</div>
          <div>Contact Us</div>
          <div>Privacy Policy</div>
          <div>Press Kit</div>
          <div>Install Guide</div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="relative w-5 h-5">
            <Image src={fbIcon} fill alt="" />
          </div>
          <div className="relative w-5 h-5">
            <Image src={xIcon} fill alt="" />
          </div>
          <div className="relative w-5 h-5">
            <Image src={igIcon} fill alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
