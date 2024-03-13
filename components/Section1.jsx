import React from "react";
import Image from "next/image";

import imgaf from "../public/hero.png";
const Section1 = () => {
  return (
    <div className="w-full ">
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-8">
          <p className="heroheading">
            Boost Your Web Development Success with Stackkaroo's
          </p>
          <p className="heroheading2">PROJECT EXECUTION MODEL</p>
          <p className="letButton">
            <span className="btndiscuss">Lets Discuss</span>
          </p>
        </div>
        <div>
          <Image
            src={imgaf}
            height={720}
            width={600}
            className="h-[720px] w-[650px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
