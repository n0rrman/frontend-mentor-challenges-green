import Image from "next/image";

import { raleway } from "./fonts";
import logo from "/public/logo.svg";

export default function Home() {
  return (
    <>
      <header
        className={`flex flex-row justify-between py-10 px-12 ${raleway.className}`}
      >
        <div className="relative w-[10.375rem] h-[3.0625rem]">
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
        <section>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <button>Get Started</button>
        </section>
        <section>
          <h1>Stay productive, wherever you are</h1>

          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>

          <div>See how Fylo works</div>
          <div>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </div>

          <div>
            <div>Kyle Burton</div>
            <div>Founder & CEO, Huddle</div>
          </div>
        </section>

        <section>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>

          <button>Get Started For Free</button>
        </section>

        <footer>
          <div>Phone: +1-543-123-4567</div>
          <div>example@fylo.com</div>
          <div>About Us</div>
          <div>Jobs</div>
          <div>Press</div>
          <div>Blog</div>

          <div>Contact Us</div>
          <div>Terms</div>
          <div>Privacy</div>
        </footer>
      </main>
    </>
  );
}
