import Image from "next/image";
import React from "react";
import NavItem from "../atom/NavItem";
import NavItem2 from "../atom/NavItem2";
import NavItem3 from "../atom/NavItem3";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-11/12 md:w-10/12 mx-auto items-center">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="logo"
          className="cursor-pointer"
          width={200}
          height={120}
        />
      </Link>
      <div className="flex items-center gap-8">
        <NavItem text={"View Terminal"} url={"terminal"} />
        <NavItem text={"About"} url={"about"} />
        <NavItem text={"Login"} url={"login"} />
        <NavItem3 text={"Sign Up"} url={"signup"} />
      </div>
    </nav>
  );
};

export default Navbar;
