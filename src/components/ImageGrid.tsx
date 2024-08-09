import React from "react";
import Food1 from "../images/image 26 (1).svg";
import Food2 from "../images/image 26 (2).svg";
import Food3 from "../images/image 26 (3).svg";
import Food4 from "../images/image 26 (4).svg";
import Food5 from "../images/Mask Group.svg";
import Food6 from "../images/image 27.svg";
import Food7 from "../images/image 27 (1).svg";
import Food8 from "../images/image 27 (2).svg";
import Food9 from "../images/image 27 (3).svg";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-10 pl-28 flex h-fit mx-auto w-full">
      <div className="btn-color h-96 text-center items-center rounded-2xl flex flex-col ">
        <img className="rounded-2xl h-64 w-96 "  src={Food1} alt="" />
        <p className="text-2xl font-semibold font-inter">Big and Juicy Wagyu Beef Cheeseburger</p>
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food2} alt="" />
        <p className="text-2xl font-semibold font-inter">Fresh Lime Roasted Salmon with Ginger Sauce</p>
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food3} alt="" />
        <p className="text-2xl font-semibold font-inter">Strawberry Oatmeal Pancake with Honey Syrup</p>
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food4} alt="" />
        <p className="text-2xl font-semibold font-inter">Fresh and Healthy Mixed Mayonnaise Salad</p>
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food6} alt="" />
        <p className="text-2xl font-semibold font-inter">Chicken Meatballs with Cream Cheese</p>
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food5} alt="" />
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food7} alt="" />
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food8} alt="" />
      </div>
      <div className="btn-color h-96 rounded-2xl flex flex-col items-center text-center">
        <img className="rounded-2xl h-64" src={Food7} alt="" />
      </div>
    </div>
  );
};

export default ImageGrid;
