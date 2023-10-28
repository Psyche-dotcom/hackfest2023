import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto py-12">
      <div className="flex flex-col gap-8  justify-center">
        <div className="flex flex-col  text-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-mainc text-3xl font-bold w-2/5">
              Introducing NASA Token “your reward system”{" "}
            </h1>
            <p className="w-2/6">
              Our digital currency features is designed to reward you loyalty{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <Image
            src="/images/NasaToken.png"
            alt="token"
            width={300}
            height={150}
          />
          <div className="w-1/2">
            <p>
              In the realm of transport tech, NASA Token rewards both users and
              drivers. Passengers earn tokens for rides, while drivers receive
              incentives based on performance. This innovative loyalty program
              is set to reshape the future of transportation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
