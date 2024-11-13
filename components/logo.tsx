import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="p-2" href={"/"} key={Math.random()}>
      <Image src={"/cg-logo.png"} alt={"logo"} width={70} height={70}></Image>
    </Link>
  );
};

export default Logo;
