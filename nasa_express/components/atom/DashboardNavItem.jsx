import Link from "next/link";
import React from "react";

const DashboardNavItem = ({ link, title }) => {
  return (
    <Link href={link}>
      <span
        className={` cursor-pointer customPoint after:content-['']  after:absolute  after:h-1 relative  text-mainc text-sm  after:bg-mainc self-start `}
        aria-label={title}
      >
        {title}
      </span>
    </Link>
  );
};

export default DashboardNavItem;
