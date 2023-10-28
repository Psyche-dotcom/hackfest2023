import React from "react";
import NavItem2 from "../atom/NavItem2";
import NavItem3 from "../atom/NavItem3";

const HeroText = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="py-32" style={{ width: "43%" }}>
        <div className="flex gap-6 flex-col">
          <h1 className="text-white font-bold text-5xl">
            Travel smart, travel NASA express..
          </h1>
          <p className="text-sm text-white">
            NASA Express is your one-stop solution for hassle-free and
            convenient bus boarding in every corner of Nigeria. We're here to
            make your travel experience smooth and hassle-free, offering a range
            of transportation options at your fingertips.
          </p>
          <div className="flex items-center gap-8 mt-8">
            <NavItem2 text={"Login"} url={"/login"} />
            <NavItem3 text={"Book now"} url={"/book"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
