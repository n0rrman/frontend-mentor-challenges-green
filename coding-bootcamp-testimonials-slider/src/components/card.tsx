import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  title: string;
  pic: StaticImageData;
  review: string;
}

export default function Card({ name, title, pic, review }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-start w-[50vw] text-xl gap-4 m-10">
      <div className="animate-scaleIn w-32 h-32 relative rounded">
        <Image src={pic} alt="" fill />
      </div>
      <p className="animate-floatRight font-light w-[34ch]">{review}</p>
      <div className="flex flex-row gap-2">
        <div className="animate-floatLeft font-bold">{name}</div>
        <div className="animate-scaleIn font-light">{title}</div>
      </div>
    </div>
  );
}
