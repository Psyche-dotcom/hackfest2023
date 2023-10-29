import React from "react";
import Feature from "../atom/Feature";
import Image from "next/image";

const FourthSection = () => {
  return (
    <section className="bg-hovc">
      <div className="w-11/12 md:w-10/12 mx-auto py-24">
        <div className="flex  justify-between gap-8">
          <div className="flex gap-2 flex-col" style={{ width: "50%" }}>
            <h1 className="text-blackt text-4xl font-bold">
              Book ride and Earn NASA token
            </h1>

            <Feature
              head={"Book Your Ride"}
              no={"1"}
              text={
                "Whether it's a daily commute or an adventure, book your ride with NASA Express. Choose from our array of travel options to suit your needs."
              }
            />
            <Feature
              head={"Earn NASA Tokens"}
              no={"2"}
              text={
                "With every completed trip, you'll earn NASA Tokens as a thank-you gesture. It's our way of showing appreciation for choosing NASA Express."
              }
            />
            <Feature
              head={"Repeat and Save"}
              no={"3"}
              text={
                "The more you travel with NASA Express, the more NASA Tokens you earn. It's a simple way to save on future rides."
              }
            />
          </div>
          <Image
            width={400}
            height={300}
            src="/images/girlcal.png"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
