import { ArrowCircleDownIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";


function MailTitle({ img, alt, name }) {
  return (
    <div className="flex items-center mt-8 gap-2">
      <img className="rounded-full" src={img} alt={alt} />
      <span className="font-semibold">{name}</span>
    </div>
  );
}

function MailBox({ children }) {
  return (
    <div className="mt-2 p-4 rounded-lg border border-neutral-200 bg-neutral-50/10 font-mono">
      {children}
    </div>
  );
}

function VijayMail() {
  return <MailTitle img={"//ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"} alt={"place holder Gmail avatar"} name={"H, Vijay Narayanan (575)"} />;

}

export default function App() {

  const bgmRef = useRef(null);
  const play = async () => {
    if (!bgmRef.current) {
      return;
    }
    try {
      await bgmRef.current.play();
    } catch {
    }
  };

  useEffect(() => {
    play();

    window.addEventListener("pointerdown", play, { once: true });
    window.addEventListener("keydown", play, { once: true });
    window.addEventListener("touchstart", play, { once: true });

    return () => {
      window.removeEventListener("pointerdown", play);
      window.removeEventListener("keydown", play);
      window.removeEventListener("touchstart", play);
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <audio src="bgm.mp3" loop ref={bgmRef} />
      <section className="h-dvh flex flex-col justify-center relative items-center">
        <div className="mx-auto text-center max-w-xs space-y-4">
          <p className="text-neutral-400 underline underline-offset-2">Turn on the audio!🔊</p>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Dear Vijay</h1>
            <p>Thanks for being the coolest, nicest, chillest man.😎</p>
          </div>
        </div>
        <div className="absolute bottom-8 flex gap-2 items-center text-neutral-400">
          <span className="">Scroll down</span>
          <ArrowCircleDownIcon weight="fill" className="animate-bounce" />
        </div>
      </section>
      <section className="px-4">
        <div className="">
          <h2 className="text-2xl font-bold">Let's travel back in time a bit.</h2>
          <p className="mt-4"><span className="text-2xl font-bold">A</span>bout eight months ago, on September 5th, last year, you reached out to me via the email.</p>
          <p className="mt-2">That was even before my internship at Rakuten started, before everything has started. It's amazing to look back and see how much things happened...</p>
        </div>
        <div>
          <VijayMail />
          <MailBox>
            <p>Dear Prajeeyachat Zachariah,</p>
            <br />
            <p>Hope you’re doing well! This is Vijay from MFTBC, reaching out about the internship opportunity with our Cost Engineering team.</p>
            <br />
            <p>During the internship, you’ll get the chance to:</p>
            <ul className="list-disc list-inside mt-2">
              <li className="">Analyze costing logics and convert them into logical codes</li>
              <li>Learn and build applications using Microsoft Power Apps (training will be provided)</li>
              <li>Contribute to creating user-friendly and attractive app designs (UI/UX)</li>
            </ul>
            <p>I’ll be sharing a few options for interview slots next week. Please let me know which one works best for you.</p>
            <p>Please fill out the form to select your preferred slot.</p>
            <p>Once we receive your feedback, an online invitation will be sent.</p>
            <p>Looking forward to connecting!</p>
            <br />
            <p>Best Regards,</p>
            <p>H Vijay Narayanan</p>
            <p>Cost Engineering Trucks Asia</p>
            <p>Mitsubishi Fuso Truck & Bus Corporation(MFTBC)</p>
          </MailBox>
        </div>
        <div>
          <MailTitle img={"https://lh3.googleusercontent.com/a/ACg8ocJjGT8pbtyf8nW6AYyOYP0uZMCyh-XRr-yzus-5IvgO6L7ZjLbf=s40-p"} name={"Zachariah Prajeeyachat"} alt={"Zach's avatar"} />
          <MailBox>
            <p>Dear Mr. Vijay Narayanan,</p>
            <br />
            <p>This is Zachariah. I hope you are doing well, too. Thank you so much for this amazing internship opportunity. The details match exactly what I was hoping I could contribute.</p>
            <p>Regarding the interview schedule, thank you for creating a form and providing options throughout the week. Unfortunately, I am concerned that there may be a conflict with my other full-time short job program (hackathon) as an app engineer with 楽天 from September 8th to 12th.</p>
            <p>Would it be possible to schedule the interview for the following week (September 15-19)? I am also available on the weekend if that is more convenient for you.</p>
            <p>Thank you for your understanding. I apologize for any inconvenience this may cause and look forward to hearing from you.</p>
            <br />
            <p>Best regards,</p>
            <p>Zachariah</p>
            <p>080 4437 6665</p>
          </MailBox>
        </div>
        <div>
          <VijayMail />
          <MailBox>
            <p>Dear Zachariah,</p>
            <br />
            <p>Thank you for your message. No worries, we completely understand your situation. I have sent over a few options for the following week. Kindly take a look and let us know which slot works best for you.</p>
            <p>Select your preferred slot</p>
            <p>Looking forward to your confirmation.</p>
            <br />
            <p>Best regards,</p>
          </MailBox>
        </div>
        <div className="flex justify-center"><span className="px-6 py-1 rounded-full bg-neutral-100 mt-4 mb-2 font-black text-neutral-400">...</span></div>
        <div>
          <VijayMail />
          <MailBox>
            <p>Dear Zach,</p>
            <br />
            <p>Thank you for sharing your class schedule. It’s great to hear that you are eager to contribute and start learning Power Apps, your enthusiasm is much appreciated!.</p>
          </MailBox>
        </div>
        <p className="mt-8">Now reading this again it feels so weird that we call each other by the full name haha</p>
        <p className="mt-2">But see? You're always so kind.</p>
        <p className="mt-2">We then scheduled my first interview, and it was the first time that I met you + Ikeda-san. I was so nervious, but you were very kind, you always are.</p>
      </section>
      <section className="px-4 mt-8">
        <h2 className="text-2xl font-bold">And then we met!🎉🎉</h2>
        <p className="mt-2">Yes I was very happy that I actually passed the interview with you, it was one of the best news and I was so excited to start. Thank you so much, again.</p>
        <p className="mt-2">I think that morning was one of the earliest I have been to the company.🤣 Like 9:15 and I was already at the gate haha.</p>
        <p className="mt-2">(One thing tho, I think you got thinner now don't you?😂)</p>
        <img className="rounded-lg mt-4" src="first-meal.jpg" alt="the picture of our first meal together" />
        <p className="mt-4">You introduced me to everybody on the first day, and the six-month journey began.</p>
        <div className="flex mt-4">
          <img className="w-1/2 rounded-l-lg" src="card-front.jpg" alt="The front of the card" />
          <img className="w-1/2 rounded-r-lg" src="card-inside.jpg" alt="Inside the card" />
        </div>
        <p className="mt-4">The card was very heart warming. I still keep them in my back everyday haha. I love it thank you.</p>
      </section>
      <section className="px-4 mt-8">
        <h2 className="text-2xl font-bold">Great meal with Vivek🍣</h2>
        <img className="rounded-lg mt-2" src="sushi-w-vivek.jpg" alt="Picture of three of us (vivek came)" />
        <p className="mt-2">It was such a good time. I think it was raining that day too? 🌧️☔</p>
      </section>
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold">I think we missed few photos here...🤔</h2>
        <p className="mt-2">I think we went to one Nomikai, when my whole body got red.</p>
        <p className="mt-2">We went to bowling, too. But I don't have pictures for both day.😂 Let me know if you have it haha</p>
      </section>
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold">I just wanna say—thank you.</h2>
        <p className="mt-2">Not only you taught me so many stuff with patience. From the first day of using Power Apps, everything about the company, I think you tell me everyday to ask you anything if I have any doubt.</p>
        <p className="mt-2">(Don't let Ikeda-san read this tho), when I have any urgent schedules, you always understand and helped me. You always tell me to go home early and not to miss my bus, even though I never listen haha sorry.🤣 You taught me how to develop my career in the future. Take me to lunch everyday. You often treated me when we go eat outside🥲 You asked me about my holiday. You listened to my personal stories even though they aren't even interesting. Building apps with you is always fun and I have skilled up more than I imagined myself that I could accomplish in this span of time.</p>
        <p>I truly enjoy working with you in every moment. You are one of the nicest, coolest, most amazing people I've met. Thank you for making this the best intern I have ever experienced. It truly means a lot to me, and I hope you know that too. This is literally the best experience I could've ever asked for.</p>
        <br />
        <p>Thank you again, for everything.</p>
        <p className="mt-2">I really look foward to the upcoming 飲み会 (Nomikai) of ours.</p>
        <p className="mb-20">Hope you enjoyed the music, too. (LOL)</p>
      </section>
    </div>
  );
};
