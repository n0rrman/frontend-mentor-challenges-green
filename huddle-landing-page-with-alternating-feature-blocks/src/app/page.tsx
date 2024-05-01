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
          <button className="bg-white px-16 py-3.5 my-0 text-sm rounded-[2rem] shadow-grayishBlue/10 font-bold shadow-xl">
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

            <button className="bg-pink w-max py-[1.15rem] px-[4.65rem] my-1 rounded-[2rem] text-paleCyan text-sm">
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

      <section className="flex flex-col px-[6.5rem] py-[10rem] mb-[8rem] gap-10">
        <SectionCard
          heading="Grow Together"
          content="Generate meaningful discussions with your audience and build a
          strong, loyal community. Think of the insightful conversations you
          miss out on with a feedback form."
          image={growingImg}
        />

        <SectionCard
          heading="Flowing Conversations"
          content="You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural
          flow."
          image={flowingImg}
          left
        />

        <SectionCard
          heading="Your Users"
          content="It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app,
          your users can start chatting immediately."
          image={usersImg}
        />
      </section>

      <footer className="bg-darkCyan text-paleCyan/80 w-full px-32 py-16">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-5 items-center -mt-[16rem] text-black px-20 py-10 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] bg-white w-70 rounded-xl">
            <h2 className={`${headingFont.className} text-3xl font-bold`}>
              Ready To Build Your Community?
            </h2>
            <button className="bg-pink text-white py-5 px-8 rounded-[2rem] shadow-xl font-bold">
              Get Started For Free
            </button>
          </div>
        </div>
        <div className="relative w-48 h-10 invert brightness-0 my-10">
          <Image src={logo} alt="" fill />
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-col text-sm gap-3">
            <div className="flex flex-row items-start gap-5">
              <div className="relative h-[1.125rem] w-[0.8125rem] m-1.5">
                <Image alt="" fill src={locationIcon} />
              </div>
              <div className="w-[40ch]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <div className="relative h-[1.125rem] w-[0.8125rem]">
                <Image alt="" fill src={phoneIcon} />
              </div>
              <div>+1-543-123-4567</div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <div className="relative h-[1.125rem] w-[0.8125rem]">
                <Image alt="" fill src={emailIcon} />
              </div>
              <div>example@huddle.com</div>
            </div>
          </div>

          <div className="grid grid-cols-2 px-32 gap-x-20">
            <div>About Us</div>
            <div>Career</div>
            <div>What We Do</div>

            <div>FAQ</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>

          <div className="flex flex-row items-start justify-start gap-1.5">
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
        <div
          className={`${headingFont.className} text-xs text-right ml-auto -mr-[3rem] font-normal`}
        >
          &copy; Copyright 2018 Huddle. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
