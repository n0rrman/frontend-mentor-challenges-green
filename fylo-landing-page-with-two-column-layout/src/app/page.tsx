import Image from "next/image";

import { raleway } from "./fonts";
import logo from "/public/logo.svg";
import heroImg from "/public/illustration-1.svg";
import sectionImg from "/public/illustration-2.svg";
import dividerDesktop from "/public/bg-curve-desktop.svg";
import EmailForm from "@/components/email-form";

export default function Home() {
  return (
    <>
      <header
        className={`flex flex-row justify-between py-10 px-12 ${raleway.className}`}
      >
        <div className="relative w-[10.375rem] h-[3.0625rem] cursor-pointer">
          <Image fill src={logo} alt="" />
        </div>
        <nav className="flex flex-row gap-10 h-fit">
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
        <section className="grid grid-cols-2 px-16 py-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-lg">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <EmailForm
              placeholder="Enter your email..."
              buttonText="Get Started"
            />
          </div>
          <div className="relative w-full aspect-[1.35]">
            <Image src={heroImg} alt="" fill />
          </div>
        </section>
        <div className="relative w-full h-[7.125rem] pointer-events-none select-none">
          <Image fill alt="" src={dividerDesktop} />
        </div>

        <section className="grid grid-cols-2 bg-neutralBlue p-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl">
              Stay productive, wherever you are
            </h1>

            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>

            <div className="text-accentCyan border-b border-accentCyan w-fit">
              See how Fylo works
            </div>

            <div className="bg-white p-4 w-1/2 shadow-lg rounded text-sm">
              <div>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </div>

              <div>
                <div>Kyle Burton</div>
                <div>Founder & CEO, Huddle</div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[1.35]">
              <Image fill alt="" src={sectionImg} />
            </div>
          </div>
        </section>

        <section className="bg-primaryDesaturatedBlue text-neutralBlue grid grid-cols-2 px-20 py-32">
          <div>
            <h1 className="text-3xl font-bold">Get early access today</h1>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div>
            <EmailForm
              placeholder="email@example.com"
              buttonText="Get Started For Free"
            />
          </div>
        </section>

        <footer className="bg-primaryDarkBlue text-neutralBlue p-20">
          <div className="relative w-[10.375rem] h-[3.0625rem] cursor-pointer">
            <Image className="text-white bg-clip-text" fill src={logo} alt="" />
          </div>
          <div className="grid grid-cols-4">
            <div>
              <div>Phone: +1-543-123-4567</div>
              <div>example@fylo.com</div>
            </div>
            <div className="mx-auto">
              <div>About Us</div>
              <div>Jobs</div>
              <div>Press</div>
              <div>Blog</div>
            </div>

            <div className="mx-auto">
              <div>Contact Us</div>
              <div>Terms</div>
              <div>Privacy</div>
            </div>
            <div className="flex flex-row">F B I</div>
          </div>
        </footer>
      </main>
    </>
  );
}
