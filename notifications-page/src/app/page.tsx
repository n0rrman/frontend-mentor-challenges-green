import Notification from "./components/notification";

import angela from "/public/avatar-angela-gray.webp";
import anna from "/public/avatar-anna-kim.webp";
import jacob from "/public/avatar-jacob-tompson.webp";
import kimberly from "/public/avatar-kimberly-smith.webp";
import mark from "/public/avatar-mark-webber.webp";
import nathan from "/public/avatar-nathan-peterson.webp";
import rizky from "/public/avatar-rizky-hasanuddin.webp";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <main className="bg-white p-10 max-w-[45rem] rounded-2xl shadow-xl">
        <div className="bg-primaryRed">
          <h1 className="bg-primaryBlue">Notifications 3</h1>
          <div className="">Mark all as read</div>
        </div>

        <div className="flex flex-col gap-3 bg-veryLightGrayishBlue">
          <Notification
            username="Mark Webber"
            link="My first tournament today!"
            profilePic={mark}
            time="1m ago"
            read={false}
            reaction
          />

          <div className="bg-lightGrayishBlue1">
            <div>Angela Gray followed you</div>
            <div>5m ago</div>
          </div>

          <div className="bg-lightGrayishBlue2">
            <div>Jacob Thompson has joined your group Chess Club</div>
            <div>1 day ago</div>
          </div>
          <div className="bg-grayishBlue">
            <div>Rizky Hasanuddin sent you a private message</div>
            <div>5 days ago</div>
            <div>
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </div>
          </div>

          <div className="bg-darkGrayishBlue">
            <div>Kimberly Smith commented on your picture</div>
            <div>1 week ago</div>
          </div>

          <div className="bg-veryDarkBlue">
            <div>
              Nathan Peterson reacted to your recent post 5 end-game strategies
              to increase your win rate
            </div>
            <div>2 weeks ago</div>
          </div>
          <div>
            <div>Anna Kim left the group Chess Club</div>
            <div>2 weeks ago</div>
          </div>
        </div>
      </main>
    </div>
  );
}

//   - Distinguish between "unread" and "read" notifications
// - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
