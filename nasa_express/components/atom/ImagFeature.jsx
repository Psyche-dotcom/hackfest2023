import Image from "next/image";
import React from "react";

const ImagFeature = ({ img, head, text }) => {
  return (
    <div className="flex items-center flex-col justify-center text-center">
      <img src={img} alt="image" style={{ width: "40px" }} />
      <h5>{head}</h5>
      <p>{text}</p>
    </div>
  );
};

export default ImagFeature;
