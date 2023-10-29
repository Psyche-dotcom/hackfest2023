import React from "react";

const FeatureComp = ({ head, text }) => {
  return (
    <div className="flex gap-2 items-start">
      <img src={"/images/ellipse-8.svg"} alt="elips" />
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">{head}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureComp;
