import React from "react";
import timer from "../images/timer.svg";

interface Props {
  image: string;
  alt: string;
  text: string;
}

const ReausableImage = ({ image, alt, text }: Props) => {
  return (
    <div className=" h-96 rounded-2xl flex flex-col items-center text-center bg-gradient-to-b from-white to-[#E7FAFE]">
      <img className="rounded-2xl h-64" src={image} alt={alt} />
      <p className="text-2xl font-semibold font-inter">{text}</p>
      <div>
        <img src={timer} alt="" />
      </div>
    </div>
  );
};

export default ReausableImage;
