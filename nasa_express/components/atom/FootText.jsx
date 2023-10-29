import Link from "next/link";
import React from "react";

const FootText = ({ text, url }) => {
  return (
    <Link href={url}>
      <p className="text-blackt font-medium hover:text-mainc">{text}</p>
    </Link>
  );
};

export default FootText;
