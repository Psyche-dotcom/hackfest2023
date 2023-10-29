import Link from "next/link";
import React from "react";

const NavItem = ({ text, url }) => {
  return (
    <Link
      className="text-white cursor-pointer hover:text-hovc text-xl font-normal"
      href={url}
    >
      {text}
    </Link>
  );
};

export default NavItem;
