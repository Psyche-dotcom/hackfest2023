import Image from "next/image";
import React from "react";

const Feature2 = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={"/images/ellipse-8.svg"} alt="elips" />

      <p className="text-xl">{text}</p>
    </div>
  );
};

export default Feature2;
