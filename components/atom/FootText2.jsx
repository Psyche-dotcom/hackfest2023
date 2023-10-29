import Link from "next/link";
import React from "react";

const FootText2 = ({ text, url }) => {
  return (
    <Link href={url}>
      <p className="text-blackt font-bold hover:text-mainc">{text}</p>
    </Link>
  );
};

export default FootText2;
