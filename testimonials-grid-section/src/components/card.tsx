import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  title: string;
  profilePic: StaticImageData;
  heading: string;
  text: string;
  className: string;
}

export default function Card({
  name,
  title,
  profilePic,
  heading,
  text,
  className,
}: CardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row justify-start items-center">
        <div className="relative h-7 w-7 rounded-full overflow-hidden">
          <Image alt="" src={profilePic} fill />
        </div>
        <div className="flex flex-col">
          <h2>{name}</h2>
          <h3 className="opacity-50">{title}</h3>
        </div>
      </div>
      <h1>{heading}</h1>
      <p className="opacity-70 text-[0.8125rem]">{text}</p>
    </div>
  );
}
