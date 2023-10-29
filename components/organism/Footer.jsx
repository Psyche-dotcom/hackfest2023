import Link from "next/link";
import React from "react";
import FootText2 from "../atom/FootText2";
import FootText from "../atom/FootText";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-24">
      <div className="flex justify-between">
        <Link href={"/"}>
          <Image
            src="/images/pinklogo.png"
            alt="logo"
            className="cursor-pointer"
            width={200}
            height={120}
          />
        </Link>
        <div className="flex flex-col gap-1">
          <FootText2 url={"/"} text={"NASA"} />
          <FootText url={"/"} text={"Rides"} />
          <FootText url={"/"} text={"Businesses"} />
          <FootText url={"/"} text={"Airports"} />
          <FootText url={"/"} text={"Cities"} />
        </div>
        <div className="flex flex-col gap-1">
          <FootText2 url={"/"} text={"Company"} />
          <FootText url={"/signup"} text={"Signup as driver"} />
          <FootText url={"/about"} text={"About us"} />
          <FootText url={"/contact"} text={"Contact us"} />
          <FootText url={"/"} text={"Blog"} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
