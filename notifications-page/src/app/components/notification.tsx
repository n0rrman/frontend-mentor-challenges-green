import Image, { StaticImageData } from "next/image";

interface NotificationProps {
  username: string;
  link: string;
  profilePic: StaticImageData;
  time: string;
  read: boolean;
  reaction?: boolean;
}

{
  /* <div className="">
<div className="bg-veryLightGrayishBlue">
  <Notification
    username="Mark Webber"
    link="My first tournament today!"
    time="1m ago"
    read={false}
    reaction
  />

  <div>
    Mark Webber reacted to your recent post My first tournament today!
  </div>
  <div>1m ago</div>
</div> */
}

export default function Notification({
  username,
  link,
  profilePic,
  time,
  read,
  reaction,
}: NotificationProps) {
  return (
    <div
      className={`${
        !read && "bg-lightGrayishBlue2"
      } flex flex-row p-4 rounded-lg`}
    >
      <div className="rounded-full">
        <div className="relative h-10 aspect-square">
          <Image alt="" fill src={profilePic} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row whitespace-pre items-center">
          <span className="font-bold">{username}</span>
          <span className="text-darkGrayishBlue">
            {reaction && " reacted to your recent post "}
          </span>
          <span className="font-bold">{link}</span>
          {!read && (
            <span>
              <div className="h-2 w-2 mx-1 -mb-0.5 bg-primaryRed rounded-full"></div>
            </span>
          )}
        </div>
        <div className="text-darkGrayishBlue">{time}</div>
      </div>
    </div>
  );
}
