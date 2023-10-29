import Image from "next/image";
import React from "react";
import ImagFeature from "../atom/ImagFeature";

const FifthSection = () => {
  return (
    <section className="bg-hovc">
      <div className="w-11/12 md:w-10/12 mx-auto pb-24">
        <div className="flex gap-4 items-center justify-between">
          <Image width={800} height={300} src="/images/map.png" alt="image" />
          <div className="flex flex-col gap-4 items-center justify-center">
            <ImagFeature
              img={"/images/mark.png"}
              head={"50k+"}
              text={"customers around nigeria"}
            />
            <ImagFeature
              img={"/images/locat.png"}
              head={"10 states "}
              text={"customers around nigeria"}
            />
            <ImagFeature
              img={"/images/people.svg"}
              head={"10k+"}
              text={"drivers"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
