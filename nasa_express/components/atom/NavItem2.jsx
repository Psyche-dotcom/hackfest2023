import Link from "next/link";
import React from "react";

const NavItem2 = ({ text, url }) => {
  return (
    <Link
      className="text-white cursor-pointer hover:bg-white hover:text-mainc text-xl font-normal bg-mainc px-4 py-2 rounded-2xl"
      href={url}
    >
      {text}
    </Link>
  );
};

export default NavItem2;
