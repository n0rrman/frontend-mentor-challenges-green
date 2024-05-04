import Image from "next/image";

import { poppins, openSans } from "./fonts";
import logo from "/public/logo.svg";
import heroImg from "/public/screen-mockups.svg";

export default function Home() {
  return (
    <main className={openSans.className}>
      <header className="flex flex-row justify-between items-start z-30 py-[3rem] px-20">
        <div className="relative w-[12.5rem] h-8 aspect-[6.45] my-2">
          <Image src={logo} alt="" fill />
        </div>
        <button className="bg-white px-16 py-3.5 my-0 text-sm text-pink border-pink rounded-[2rem] shadow-grayishBlue/10 font-bold border-2">
          Try It Free
        </button>
      </header>

      <section className="flex flex-col justify-center items-center text-center gap-12 py-48">
        <div className="flex flex-col gap-6 items-center">
          <h1 className={`${poppins.className} text-4xl`}>
            Build The Community Your Fans Will Love
          </h1>
          <div className="w-[52ch] text-lg">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>

          <button className="rounded-[2rem] py-4 px-12 text-white bg-pink text-xl">
            Get Started For Free
          </button>
        </div>

        <div className="min-w-[65rem] aspect-[1.4] min-h-[20rem] relative my-20">
          <Image fill alt="" src={heroImg} />
        </div>

        <div className="flex flex-row justify-center gap-64 w-full text-xl">
          <div className="flex flex-col gap-14">
            <div className="text-[6rem] font-bold">1.4k+</div>
            <div className="opacity-50">Communities Formed</div>
          </div>
          <div className="flex flex-col gap-14">
            <div className="text-[6rem] font-bold">2.7m+</div>
            <div className="opacity-50">Messages Sent</div>
          </div>
        </div>
      </section>

      <div>Grow Together</div>

      <div>
        Generate meaningful discussions with your audience and build a strong,
        loyal community. Think of the insightful conversations you miss out on
        with a feedback form.
      </div>

      <div>Flowing Conversations</div>
      <div>
        You wouldn't paginate a conversation in real life, so why do it online?
        Our threads have just-in-time loading for a more natural flow.
      </div>

      <div>Your Users</div>
      <div>
        It takes no time at all to integrate Huddle with your app's
        authentication solution. This means, once signed in to your app, your
        users can start chatting immediately.
      </div>

      <div>Ready To Build Your Community?</div>
      <div>Get Started For Free</div>

      <footer className="bg-veryDarkCyan text-veryPaleBlue">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </div>

        <div>Phone: +1-543-123-4567</div>
        <div>example@huddle.com</div>

        <div>Newsletter</div>
        <div>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We'll never send you spam or pass on your email address
        </div>

        <div>Subscribe</div>
      </footer>
    </main>
  );
}
