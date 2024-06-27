import CardSlider from "@/components/card-slider";
import Image from "next/image";

import tanyaPic from "/public/image-tanya.jpg";
import johnPic from "/public/image-john.jpg";
import curveImg from "/public/pattern-curve.svg";
import quotesImg from "/public/pattern-quotes.svg";

export default function Home() {
  const data = [
    {
      name: "Tanya Sinclair",
      title: "UX Engineer",
      pic: tanyaPic,
      review:
        "\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"",
    },
    {
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
      pic: johnPic,
      review:
        '" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <CardSlider data={data} />
      </div>
      <Image className="w-1/2 bottom-0 absolute" src={curveImg} alt="" />
      <Image className="w-32 absolute" src={quotesImg} alt="" />
    </div>
  );
}
