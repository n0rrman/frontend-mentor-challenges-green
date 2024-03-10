export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-row justify-between">
        <div>HUDDLE LOGO</div>
        <button>Try It Free</button>
      </header>
      <section className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <h1>Build The Community Your Fans Will Love</h1>
          <div>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>

          <div>Get Started For Free</div>
        </div>
        <div className="w-1/2">IMAGE</div>
      </section>

      <section className="px-20 py-16">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div className="w-1/2">IMAGE</div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2">
            <h2>Flowing Conversations</h2>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
          <div className="w-1/2">IMAGE</div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2">
            <h2>Your Users</h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div className="w-1/2">IMAGE</div>
        </div>
      </section>

      <footer className="bg-darkCyan text-paleCyan">
        <div>
          <h2>Ready To Build Your Community?</h2>
          <button>Get Started For Free</button>
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>

        <div>+1-543-123-4567</div>
        <div>example@huddle.com</div>

        <div>About Us What We Do FAQ</div>

        <div>Career Blog Contact Us</div>

        <div>&copy; Copyright 2018 Huddle. All rights reserved.</div>
      </footer>
    </div>
  );
}
