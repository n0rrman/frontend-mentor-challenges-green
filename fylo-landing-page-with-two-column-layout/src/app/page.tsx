import Image from "next/image";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

import { raleway } from "./fonts";
import logo from "/public/logo.svg";
import arrowIcon from "/public/icon-arrow.svg";
import quotesIcon from "/public/icon-quotes.svg";
import emailIcon from "/public/icon-email.svg";
import phoneIcon from "/public/icon-phone.svg";
import heroImg from "/public/illustration-1.svg";
import profileImg from "/public/avatar-testimonial.jpg";
import sectionImg from "/public/illustration-2.svg";
import dividerDesktop from "/public/bg-curve-desktop.svg";
import EmailForm from "@/components/email-form";

export default function Home() {
  return (
    <>
      <header
        className={`flex flex-row justify-between p-6 sm:py-[4.05rem] sm:px-[5rem] ${raleway.className}`}
      >
        <div className="relative w-[5rem] sm:w-[10.375rem] aspect-[3.4] cursor-pointer">
          <Image fill src={logo} alt="" />
        </div>
        <nav className="flex flex-row gap-6 sm:gap-[3.58rem] justify-center items-center text-xs sm:text-[1.01rem]">
          <div className="cursor-pointer border-b border-transparent hover:border-black transition-all">
            Features
          </div>
          <div className="cursor-pointer border-b border-transparent hover:border-black transition-all">
            Team
          </div>
          <div className="cursor-pointer border-b border-transparent hover:border-black transition-all">
            Sign In
          </div>
        </nav>
      </header>
      <main>
        <section className="grid grid-cols-1 lg:grid-cols-[0.48fr,0.52fr] justify-center gap-x-12 items-center px-9 sm:px-20 pt-[1.4rem] pb-[4rem] sm:pb-[10.2rem]">
          <div className="flex flex-col gap-5 flex-0 mt-0 sm:-mt-7">
            <h1
              className={`${raleway.className} mt-10 text-[1.5rem] sm:text-[2.5rem] font-bold text-center sm:text-left`}
            >
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-sm sm:text-[1.125rem] leading-[1.4rem] text-center sm:text-left">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <div className="">
              <EmailForm
                placeholder="Enter your email..."
                buttonText="Get Started"
              />
            </div>
          </div>
          <div className="relative w-full order-first sm:order-last aspect-[1.35] mt-[3.25rem] sm:mt-0 ">
            <Image src={heroImg} alt="" fill />
          </div>
        </section>
        <div className="relative w-full h-[3.5rem] sm:h-[7.125rem] pointer-events-none select-none">
          <Image fill alt="" src={dividerDesktop} />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-[0.55fr,0.45fr] bg-neutralBlue gap-[4rem] px-7 sm:px-20 pt-0 sm:pt-14 pb-[6.55rem]">
          <div className="flex flex-col gap-7">
            <h1
              className={`${raleway.className} font-bold text-md text-center sm:text-left sm:text-[2.55rem] py-5`}
            >
              Stay productive, wherever you are
            </h1>

            <div className="space-y-4 sm:max-w-[57ch] text-sm sm:text-inherit">
              <p className="">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>

              <div>
                <div className="flex flex-row items-center gap-2 text-accentCyan border-b border-accentCyan w-fit pb-1">
                  See how Fylo works
                  <Image
                    className="translate-y-[2px]"
                    alt=""
                    src={arrowIcon}
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 px-8 py-6 w-full sm:w-[22.2rem] shadow-lg rounded text-[0.87rem] leading-[1.45rem]">
              <div className="relative mx-0.5 w-[0.825rem] h-[1.35rem]">
                <Image className="pb-2" src={quotesIcon} fill alt="" />
              </div>
              <div className="py-0.5">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </div>

              <div className="flex flex-row items-center justify-start gap-2 pt-3">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image alt="" fill src={profileImg} />
                </div>
                <div className="flex flex-col items-start justify-center -space-y-1.5 pt-1 ">
                  <div className={`${raleway.className} font-bold text-xs`}>
                    Kyle Burton
                  </div>
                  <div className="text-[0.55rem]">Founder & CEO, Huddle</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first sm:order-last">
            <div className="relative w-full aspect-[1.30] mt-8">
              <Image fill alt="" src={sectionImg} />
            </div>
          </div>
        </section>

        <section className="bg-primaryDesaturatedBlue text-neutralBlue grid grid-cols-1 sm:grid-cols-2 px-12 sm:px-20 pt-12 sm:pt-[6.3rem] pb-10 sm:pb-[5.35rem]">
          <div className="flex flex-col gap-4">
            <h1
              className={`${raleway.className} text-center sm:text-left text-lg sm:text-[2rem] font-bold`}
            >
              Get early access today
            </h1>
            <p className="max-w-[58ch] text-neutralBlue/80 tracking-wide text-sm sm:text-inherit text-center sm:text-left">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className="px-0 sm:pl-[18.5%] sm:pr-[6%]">
            <EmailForm
              placeholder="email@example.com"
              buttonText="Get Started For Free"
              vertical
            />
          </div>
        </section>

        <footer className="bg-primaryDarkBlue text-neutralBlue/80 px-10 sm:px-20 pt-[6.75rem] pb-[2.85rem]">
          <div className="relative w-[11rem] h-[3.25rem] cursor-pointer">
            <Image
              className="mix-blend-luminosity invert brightness-0"
              fill
              src={logo}
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-4 py-6 px-0.5">
            <div className="flex flex-col md:gap-4">
              <div className="flex flex-row justify-start items-center gap-[1.2rem]">
                <div className="relative w-[1.1rem] h-[1.1rem]">
                  <Image src={phoneIcon} fill alt="" />
                </div>
                <div>Phone: +1-543-123-4567</div>
              </div>
              <div className="flex flex-row justify-start items-center gap-[1.2rem]">
                <div className="relative w-5 h-4">
                  <Image src={emailIcon} fill alt="" />
                </div>
                <div>example@fylo.com</div>
              </div>
            </div>
            <div className="justify-self-start md:justify-self-center flex flex-col gap-3.5">
              <div>About Us</div>
              <div>Jobs</div>
              <div>Press</div>
              <div>Blog</div>
            </div>

            <div className="justify-self-start md:justify-self-center ml-0 md:-ml-[5rem] flex flex-col gap-3.5">
              <div>Contact Us</div>
              <div>Terms</div>
              <div>Privacy</div>
            </div>
            <div className="flex flex-row justify-center items-start gap-3.5 px-5 py-1 flex-1">
              <div className="border p-1.5 border-neutralBlue rounded-full text-md hover:cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="border p-1.5 border-neutralBlue rounded-full text-md hover:cursor-pointer">
                <FaTwitter />
              </div>
              <div className="border p-1.5 border-neutralBlue rounded-full text-md hover:cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
