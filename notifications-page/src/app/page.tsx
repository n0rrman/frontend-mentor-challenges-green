export default function Home() {
  return (
    <main>
      <div>
        <h1>Notifications 3</h1>
        <div>Mark all as read</div>
      </div>

      <div>
        <div>
          <div>
            Mark Webber reacted to your recent post My first tournament today!
          </div>
          <div>1m ago</div>
        </div>

        <div>
          <div>Angela Gray followed you</div>
          <div>5m ago</div>
        </div>

        <div>
          <div>Jacob Thompson has joined your group Chess Club</div>
          <div>1 day ago</div>
        </div>
        <div>
          <div>Rizky Hasanuddin sent you a private message</div>
          <div>5 days ago</div>
          <div>
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </div>
        </div>

        <div>
          <div>Kimberly Smith commented on your picture</div>
          <div>1 week ago</div>
        </div>

        <div>
          <div>
            Nathan Peterson reacted to your recent post 5 end-game strategies to
            increase your win rate
          </div>
          <div>2 weeks ago</div>
        </div>
        <div>
          <div>Anna Kim left the group Chess Club</div>
          <div>2 weeks ago</div>
        </div>
      </div>
    </main>
  );
}

//   - Distinguish between "unread" and "read" notifications
// - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
