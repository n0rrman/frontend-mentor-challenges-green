import Image from "next/image";

import { poppins, openSans } from "./fonts";
import logo from "/public/logo.svg";
import messageIcon from "/public/icon-messages.svg";
import communityIcon from "/public/icon-communities.svg";
import heroImg from "/public/screen-mockups.svg";
import topSectionDivider1 from "/public/bg-section-top-desktop-1.svg";
import bottomSectionDivider1 from "/public/bg-section-bottom-desktop-1.svg";
import topSectionDivider2 from "/public/bg-section-top-desktop-2.svg";
import bottomSectionDivider2 from "/public/bg-section-bottom-desktop-2.svg";
import footerSectionDivider from "/public/bg-footer-top-desktop.svg";
import flowingImg from "/public/illustration-flowing-conversation.svg";
import growingImg from "/public/illustration-grow-together.svg";
import usersImg from "/public/illustration-your-users.svg";

export default function Home() {
  return (
    <main className={openSans.className}>
      <header className="flex flex-row justify-between items-start z-30 py-[4.5rem] px-16">
        <div className="relative w-[15rem] min-h-8 aspect-[6.45] my-2 mx-4">
          <Image src={logo} alt="" fill />
        </div>
        <button
          className={`${openSans.className} bg-white px-[1.6rem] py-2 my-1 text-[0.975rem] text-pink border-pink rounded-[2rem] font-bold tracking-snug shadow-grayishBlue/10 border-2 opacity-60`}
        >
          Try It Free
        </button>
      </header>

      <section className="flex flex-col justify-center items-center text-center gap-12 pt-[9.5rem] pb-[9rem]">
        <div className="flex flex-col gap-6 items-center">
          <h1 className={`${poppins.className} text-[3rem]`}>
            Build The Community Your Fans Will Love
          </h1>
          <div className="w-[52ch] text-xl leading-[1.8rem]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>

          <button className="rounded-[3rem] py-[1.6rem] px-[6.2rem] mt-6 text-white bg-pink text-xl font-bold shadow-xl hover:opacity-60 transition-all">
            Get Started For Free
          </button>
        </div>

        <div className="min-w-[64.75rem] aspect-[1.4] min-h-[20rem] relative my-16">
          <Image fill alt="" src={heroImg} />
        </div>

        <div className="flex flex-row gap-[21.5rem] justify-center w-full text-2xl">
          <div className="flex flex-col gap-14 items-start">
            <div className="w-14 h-8">
              <Image src={communityIcon} width={47} height={41} alt="" />
            </div>
            <div className="text-[6rem] font-bold">1.4k+</div>
            <div className="opacity-40 mx-auto">Communities Formed</div>
          </div>
          <div className="flex flex-col gap-14 items-start">
            <div className="w-14 h-8">
              <Image src={messageIcon} width={47} height={40} alt="" />
            </div>
            <div className="text-[6rem] font-bold">2.7m+</div>
            <div className="opacity-40 mx-auto">Messages Sent</div>
          </div>
        </div>
      </section>

      <div className="relative z-0 pointer-events-none select-none w-full h-40">
        <Image src={topSectionDivider1} alt="" className="object-fill" fill />
      </div>
      <section className="bg-veryPaleBlue ">
        <div className="grid grid-cols-2 px-[8.2rem] gap-[6.5rem] py-[4.6rem]">
          <div className="w-[55ch] space-y-6 my-auto">
            <div className={`${poppins.className} font-bold text-[2.5rem]`}>
              Grow Together
            </div>

            <div>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </div>
          </div>
          <div className="relative w-[32rem] h-[26rem]">
            <Image fill src={growingImg} alt="" />
          </div>
        </div>

        <div className="bg-white">
          <div className="relative z-0 pointer-events-none select-none w-full h-40">
            <Image
              src={bottomSectionDivider1}
              alt=""
              className="object-fill"
              fill
            />
          </div>

          <div className="grid grid-cols-2 px-[8.2rem] gap-[6.5rem] py-[4.6rem]">
            <div className="relative w-[32rem] h-[26rem]">
              <Image fill src={flowingImg} alt="" />
            </div>
            <div className="w-[55ch] space-y-6 my-auto">
              <div className={`${poppins.className} font-bold text-[2.5rem]`}>
                Flowing Conversations
              </div>
              <div>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </div>
            </div>
          </div>

          <div className="relative z-0 pointer-events-none select-none w-full h-40">
            <Image
              src={topSectionDivider2}
              alt=""
              className="object-fill"
              fill
            />
          </div>
        </div>

        <div className="grid grid-cols-2 px-[8.2rem] gap-[6.5rem] py-[4.6rem]">
          <div className="w-[55ch] space-y-6 my-auto">
            <div className={`${poppins.className} font-bold text-[2.5rem]`}>
              Your Users
            </div>
            <div>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </div>
          </div>

          <div className="relative w-[32rem] h-[26rem]">
            <Image fill src={usersImg} alt="" />
          </div>
        </div>
      </section>
      <div className="relative z-0 pointer-events-none select-none w-full h-40">
        <Image
          src={bottomSectionDivider2}
          alt=""
          className="object-fill"
          fill
        />
      </div>

      <div className="flex flex-col justify-center items-center py-40 gap-2.5">
        <h1 className={`${poppins.className} text-[2.5rem]`}>
          Ready To Build Your Community?
        </h1>

        <button className="rounded-[3rem] py-[1.6rem] px-[6.2rem] mt-6 text-white bg-pink text-xl font-bold shadow-xl hover:opacity-60 transition-all">
          Get Started For Free
        </button>
      </div>

      <div className="relative z-0 pointer-events-none select-none w-full h-40">
        <Image src={footerSectionDivider} alt="" className="object-fill" fill />
      </div>
      <footer className="grid grid-cols-2 bg-veryDarkCyan text-veryPaleBlue -mt-1 px-32">
        <div>
          <div className="relative w-[10rem] md:w-[15rem] h-6 md:h-9 invert brightness-0 my-10">
            <Image src={logo} alt="" fill />
          </div>
          <div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </div>

            <div>Phone: +1-543-123-4567</div>
            <div>example@huddle.com</div>
          </div>
        </div>
        <div>
          <div className="uppercase font-bold">Newsletter</div>
          <div>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </div>

          <div>Subscribe</div>
        </div>
      </footer>
    </main>
  );
}
