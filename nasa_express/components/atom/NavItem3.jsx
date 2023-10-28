import Link from "next/link";
import React from "react";

const NavItem3 = ({ text, url }) => {
  return (
    <Link
      className="text-blackt cursor-pointer  hover:text-mainc text-xl font-normal bg-white px-4 py-2 rounded-2xl"
      href={url}
    >
      {text}
    </Link>
  );
};

export default NavItem3;
