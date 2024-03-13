import React from "react";
import Image from "next/image";

import leading from "../public/leading.png";
import cashless from "../public/cashless.png";
import commitment from "../public/commitment.png";
import customized from "../public/customized.png";
import experienced from "../public/experienced.png";
import highly from "../public/highly.png";
import reviews from "../public/reviews.png";
import support from "../public/support.png";
import satisfaction from "../public/satisfaction.png";

const Section4 = () => {
  const List = [
    {
      name: "Leading and Affordable Website Development company in India",
      image: leading,
    },
    { name: "Highly Competitive and Affordable Pricing Models", image: highly },
    {
      name: "Customized  and Readymade App Development Solutions",
      image: customized,
    },
    { name: "Cashless, Secure and Multiple Payment Methods", image: cashless },
    { name: "Streamlined Operations and Post-Launch Support", image: support },
    {
      name: "Experienced and highly qualified team of Professionals",
      image: experienced,
    },
    { name: "Reviews, Ratings & Social Media Integration", image: reviews },
    { name: "Enhanced Customer Satisfaction", image: satisfaction },
    { name: "Commitment to Quality and Timely Delivery", image: commitment },
  ];
  return (
    <div className="text-[50px] font-bold text-[#0a56f1] pt-[100px]">
      Why should you Choose Stackkaroos Website Development Service?
      <div className=" ">
        <div className="grid grid-cols-3 gap-8 pt-[100px]">
          {List.map((item, i) => {
            return (
              <div
                key={i}
                className="text-center border p-5 h-[350px] rounded flex flex-col gap-5 justify-center items-center"
              >
                <Image
                  src={item.image}
                  height={500}
                  width={500}
                  alt={item.image}
                  className="w-20 h-20"
                />
                <p className="text-sm text-gray-600">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
