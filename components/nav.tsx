import Link from "next/link";
import React from "react";
import Logo from "./logo";
import Auth from "./auth";

const paths = [
    {
      url: "dash",
      name: "Dashboard",
    },
    {
      url: "dash/settings",
      name: "Settings",
    },
    {
      url: "dash/premium",
      name: "Premium",
    },
  ],
  Nav = () => {
    return (
      <div className="flex flex-row">
        <Logo />

        <nav className="*:m-4 w-screen justify-center flex">
          {paths.map((path, index) => {
            return (
              <Link href={`/${path.url}`} key={index}>
                {path.name}
              </Link>
            );
          })}
        </nav>

        <Auth />
      </div>
    );
  };

export default Nav;
