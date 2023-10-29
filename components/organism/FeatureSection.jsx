import React from "react";
import Feature2 from "../atom/Feature2";

const FeatureSection = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto pt-24">
      <div className="flex">
        <div className="flex gap-2 flex-col">
          <h1 className="text-mainc text-4xl font-bold">
            Ride the future with NASA express
          </h1>
          <h3 className="text-2xl font-medium">
            Experience Modern Commuting and Seamless Travel
          </h3>
          <Feature2 text={"Enjoy state of art transportation solutions"} />
          <Feature2
            text={
              "Effortless booking, safe rides, and convenience at your fingertips."
            }
          />
          <Feature2 text={"Eco-friendly transportation"} />
        </div>
        <img style={{ width: "60%" }} src="/images/vehincle.png" alt="image" />
      </div>
    </section>
  );
};

export default FeatureSection;
