import Link from "next/link";
import React from "react";

const Auth = () => {
  return (
    <Link className="text-sm w-40 flex items-center p-2" href={"/auth"}>
      Sign up or Login
    </Link>
  );
};

export default Auth;
