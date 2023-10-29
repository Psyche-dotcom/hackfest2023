import React from "react";
import Feature from "../atom/FeatureComp";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-24">
      <div className="flex flex-row-reverse justify-between gap-8">
        <div className="flex gap-2 flex-col" style={{ width: "50%" }}>
          <h1 className="text-mainc text-4xl font-bold">
            Ride the future with NASA express
          </h1>
          <h3 className="text-2xl font-medium">
            Experience Modern Commuting and Seamless Travel
          </h3>
          <Feature
            head={"Sign Up "}
            no={"1"}
            text={
              "Join our team of dedicated driver agents and become a part of the NASA Express family."
            }
          />
          <Feature
            head={"Earn NASA Tokens"}
            no={"2"}
            text={
              "For every successful trip you complete, you'll earn NASA Tokens as a token of appreciation for your commitment."
            }
          />
          <Feature
            head={"Flexible Earnings"}
            no={"3"}
            text={
              "Your hard work pays off in NASA Tokens, which you can redeem or exchange as you prefer. Enjoy the flexibility of choosing how you want to use your earnings."
            }
          />
        </div>
        <Image width={400} height={300} src="/images/rider.png" alt="image" />
      </div>
    </section>
  );
};

export default ThirdSection;
