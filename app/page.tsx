import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className=" flex  flex-col justify-center items-center">
      <div className="w-full lg:w-1/2 ">
        <div className="">
          <Hero />
          <Section />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

const //
  Hero = () => {
    return (
      <div className=" hero h-80 flex items-center justify-center">
        <div className="w-fit">
          <strong className="md:text-6xl text-4xl">Welcome to CG</strong>
          <div className="text-right">...A contact gain platform</div>
        </div>
      </div>
    );
  },
  Section = () => {
    return (
      <section className="space-y-2">
        {/* points */}
        {points.map((point, index) => {
          return (
            <div
              key={index}
              className={`p-3 flex ${
                point.position == "left" ? "" : "justify-end "
              }`}
            >
              <div
                className={`border shadow-2xl rounded-xl border-gray-600 w-96 p-16 ${
                  point.position == "left" ? "border-r-8" : "border-l-8 "
                }`}
              >
                <strong>{point.point}</strong>
                <div>{point.details}</div>
              </div>
            </div>
          );
        })}
      </section>
    );
  },
  Footer = () => {
    return (
      <footer className="h-24 w-full  bg-gray-300 items-center flex justify-center text-center">
        <Link href={"https://somtochukwu-ko.vercel.app/github"}>
          @Somtochukwu
        </Link>
      </footer>
    );
  },
  points = [
    {
      position: "left",
      point: "How it works",
      details:
        "It is simple, just sign-in with your google account and add your WhatsApp number, and boom!, you just gained NAN+ contacts.",
    },
    {
      position: "right",
      point: "Premium",
      details: "You can pay for premium to get more than 2k contacts.",
    },
    {
      position: "left",
      point: "How it works",
      details:
        "It is simple, just sign-in with your google account and add your WhatsApp number, and boom!,  you just gained NAN+ contacts.",
    },
    {
      position: "right",
      point: "Premium",
      details: "You can pay for premium to get more than 2k contacts.",
    },
  ];
