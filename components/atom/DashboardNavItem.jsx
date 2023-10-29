import Link from "next/link";
import React from "react";

const DashboardNavItem = ({ link, title }) => {
  return (
    <Link href={link}>
      <p
        className={`cursor-pointer customPoint after:content-['']   after:absolute  after:h-1 relative  text-white text-2xl ml-6  after:bg-blackt self-start `}
        aria-label={title}
      >
        {title}
      </p>
    </Link>
  );
};

export default DashboardNavItem;
