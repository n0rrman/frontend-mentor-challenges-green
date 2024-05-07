import Image from "next/image";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import heroBg from "/public/bg-hero-desktop.svg";
import heroImg from "/public/illustration-mockups.svg";
import growingImg from "/public/illustration-grow-together.svg";
import flowingImg from "/public/illustration-flowing-conversation.svg";
import usersImg from "/public/illustration-your-users.svg";
import locationIcon from "/public/icon-location.svg";
import phoneIcon from "/public/icon-phone.svg";
import emailIcon from "/public/icon-email.svg";
import logo from "/public/logo.svg";
import { headingFont } from "./fonts";
import SectionCard from "@/components/section-card";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero" className="flex flex-col bg-paleCyan h-[45rem]">
        <div className="absolute w-full h-full z-10">
          <div className="relative w-full h-[45rem]">
            <Image src={heroBg} alt="" fill />
          </div>
        </div>
        <header className="flex flex-row justify-between items-start z-30 py-[3rem] px-20">
          <div className="relative w-[12.5rem] h-8 aspect-[6.45] my-2">
            <Image src={logo} alt="" fill />
          </div>
          <button className="bg-white px-16 py-3.5 my-0 text-sm rounded-[2rem] shadow-grayishBlue/10 font-bold shadow-xl hover:text-grayishBlue transition-all">
            Try It Free
          </button>
        </header>
        <div className="flex flex-row h-full items-start justify-start">
          <div className="flex flex-col w-1/2 z-30 pl-20 pr-16 gap-[1.75rem] pt-28">
            <h1 className={`${headingFont.className} text-[2.5rem] font-bold`}>
              Build The Community Your Fans Will Love
            </h1>
            <div className="">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </div>

            <button className="bg-pink w-max py-[1.15rem] px-[4.65rem] my-1 rounded-[2rem] text-paleCyan text-sm hover:opacity-60 transition-all">
              Get Started For Free
            </button>
          </div>
          <div className="pt-4 pr-[5.25rem] z-30 ">
            <div className="relative w-[43.25rem] aspect-[1.4]">
              <Image src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-[6.5rem] py-[10rem] mb-[11.5rem] gap-10">
        <SectionCard
          heading="Grow Together"
          content="Generate meaningful discussions with your audience and build a
          strong, loyal community. Think of the insightful conversations you
          miss out on with a feedback form."
          imgSize="h-[20.75rem] w-[25.4rem]"
          image={growingImg}
        />

        <SectionCard
          heading="Flowing Conversations"
          content="You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural
          flow."
          image={flowingImg}
          imgSize="h-[18.5rem] w-[26rem]"
          left
        />

        <SectionCard
          heading="Your Users"
          content="It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app,
          your users can start chatting immediately."
          image={usersImg}
          imgSize="h-[19.75rem] w-[26.5rem] -mr-0.5"
        />
      </section>

      <footer className="bg-darkCyan text-paleCyan/80 w-full py-16">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-9 items-center -mt-[15.5rem] text-black px-20 pt-16 pb-[3.4rem] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] bg-white w-[50rem] rounded-xl">
            <h2 className={`${headingFont.className} text-[2rem] font-bold`}>
              Ready To Build Your Community?
            </h2>
            <button className="bg-pink text-white text-[1.25rem] py-6 px-[6.4rem] rounded-[3rem] shadow-xl font-bold hover:opacity-60 transition-all">
              Get Started For Free
            </button>
          </div>
        </div>
        <div className="pr-[2rem] pl-[7.5rem] py-[3.5rem]">
          <div className="relative w-[15rem] h-9 invert brightness-0 my-10">
            <Image src={logo} alt="" fill />
          </div>

          <div className="flex flex-row justify-center items-between">
            <div className="flex flex-col gap-6 text-[1rem] flex-0">
              <div className="flex flex-row items-start gap-7">
                <div className="relative h-[1.125rem] w-[0.8125rem] mt-1.5">
                  <Image alt="" fill src={locationIcon} />
                </div>
                <div className="w-[40ch]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
              </div>

              <div className="flex flex-row items-center justify-start gap-6">
                <div className="relative h-[1.1rem] w-[1.2rem]">
                  <Image alt="" fill src={phoneIcon} />
                </div>
                <div>+1-543-123-4567</div>
              </div>

              <div className="flex flex-row items-center justify-start gap-6">
                <div className="relative h-[1rem] w-[1.25rem]">
                  <Image alt="" fill src={emailIcon} />
                </div>
                <div>example@huddle.com</div>
              </div>
            </div>

            <div className="grid grid-cols-2 self-start gap-y-4 gap-x-[5rem] mx-[6.4rem] flex-1">
              <div className="cursor-pointer hover:text-white transition-all">
                About Us
              </div>
              <div className="cursor-pointer hover:text-white transition-all">
                Career
              </div>
              <div className="cursor-pointer hover:text-white transition-all w-max">
                What We Do
              </div>

              <div className="cursor-pointer hover:text-white transition-all">
                Blog
              </div>
              <div className="cursor-pointer hover:text-white transition-all">
                FAQ
              </div>
              <div className="cursor-pointer hover:text-white transition-all">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col justify-between flex-0 pr-10 h-[14rem]">
              <div className="flex flex-row items-start justify-start gap-3">
                <div className="border p-2 border-neutralBlue rounded-full text-sm hover:cursor-pointer hover:border-pink hover:text-pink transition-all">
                  <FaFacebookF />
                </div>
                <div className="border p-2 border-neutralBlue rounded-full text-sm hover:cursor-pointer hover:border-pink hover:text-pink transition-all">
                  <FaTwitter />
                </div>
                <div className="border p-2 border-neutralBlue rounded-full text-sm hover:cursor-pointer hover:border-pink hover:text-pink transition-all">
                  <FaInstagram />
                </div>
              </div>
              <div className={`${headingFont.className} text-xs font-normal`}>
                &copy; Copyright 2018 Huddle. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
