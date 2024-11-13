"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const side = document.getElementsByClassName("side")[0] as HTMLElement;
    setInterval(() => {
      side.style.height = window.innerHeight - side.offsetTop + "px";
    }, 500);
    console.log(window.innerHeight, side.offsetTop);
  }, []);

  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="border-t-4 w-full p-4 border-gray-600">{children}</div>
    </div>
  );
}

const //
  SideBar = () => {
    return (
      <div className="w-48 space-y-2 p-2 py-4 side h-screen border-r-4 border-t-4 border-gray-600">
        {paths.map((path, index) => {
          return (
            <div key={Math.random()}>
              <Link href={path.url} key={index}>
                {path.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  },
  paths = [
    {
      url: "/dash",
      name: "Dashboard",
    },
    {
      url: "/dash/settings",
      name: "Settings",
    },
    {
      url: "/dash/premium",
      name: "Premium",
    },
  ];
