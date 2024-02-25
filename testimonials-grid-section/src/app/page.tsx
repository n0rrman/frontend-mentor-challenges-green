import Card from "@/components/card";

import danielPic from "/public/image-daniel.jpg";
import jonathanPic from "/public/image-jonathan.jpg";
import jeanettePic from "/public/image-jeanette.jpg";
import kiraPic from "/public/image-kira.jpg";
import patrickPic from "/public/image-patrick.jpg";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-lightGrayishBlue font-medium text-lightGray">
      <section className="flex flex-col mx-6 sm:grid grid-cols-2 lg:grid-cols-4 gap-x-[1.875rem] gap-y-6 container lg:max-w-[69.375rem]">
        <Card
          className="col-span-2 bg-moderateViolet"
          name="Daniel Clifford"
          title="Verified Graduate"
          profilePic={danielPic}
          first
          heading="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
          text="I was an EMT for many years before I joined the bootcamp. I've been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I've successfully switched careers, working as a Software
        Engineer at a VR startup."
        />

        <Card
          className="order-2 bg-veryDarkGrayishBlue"
          name="Jonathan Walters"
          title="Verified Graduate"
          profilePic={jonathanPic}
          heading="The team was very supportive and kept me motivated"
          text="I started as a total newbie with virtually no coding skills. I now
        work as a mobile engineer for a big company. This was one of the best
        investments I've made in myself."
        />

        <Card
          className="order-4 bg-white text-veryDarkBlackishBlue"
          name="Jeanette Harmon"
          title="Verified Graduate"
          profilePic={jeanettePic}
          heading="An overall wonderful and rewarding experience"
          text="Thank you for the wonderful experience! I now have a job I really
        enjoy, and make a good living while doing something I love."
        />

        <Card
          className="col-span-2 order-5 bg-veryDarkBlackishBlue"
          name="Patrick Abrams"
          title="Verified Graduate"
          profilePic={patrickPic}
          purpleBorder
          heading="Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy."
          text="The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people."
        />

        <Card
          className="row-span-2 order-last sm:order-3 bg-white text-veryDarkBlackishBlue"
          name="Kira Whittle"
          title="Verified Graduate"
          profilePic={kiraPic}
          heading="Such a life-changing experience. Highly recommended!"
          text="Before joining the bootcamp, I've never written a line of code. I
        needed some structure from professionals who can help me learn
        programming step by step. I was encouraged to enroll by a former student
        of theirs who can only say wonderful things about the program. The
        entire curriculum and staff did not disappoint. They were very hands-on
        and I never had to wait long for assistance. The agile team project, in
        particular, was outstanding. It took my learning to the next level in a
        way that no tutorial could ever have. In fact, I've often referred to it
        during interviews as an example of my developent experience. It
        certainly helped me land a job as a full-stack developer after receiving
        multiple offers. 100% recommend!"
        />
      </section>
    </main>
  );
}
