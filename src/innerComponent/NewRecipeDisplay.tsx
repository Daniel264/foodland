import JohnSmith from "../components/JohnSmith";
import time from "../images/time.svg";
import Knife from "../images/ForkKnife.svg";

import PlayButton from "../images/playbutton.svg";
import { useLocation, useParams } from "react-router-dom";

const NewRecipeDisplay = () => {
  const { id } = useParams();
  const location = useLocation();
  const { image, text } = location.state || {};

  return (
    <>
      <div className="flex p-12">
        <div className="w-8/12 ">
          <h1 className="font-inter font-semibold text-5xl p-5">
            {text || id}
          </h1>
          <div className="flex ml-10">
            <JohnSmith />
            <div className="flex w-40 ml-6">
              <img className="w-5" src={time} alt="" />
              <div className="px-2">
                <h6 className="text-sm font-medium">PREP TIME</h6>
                <p>15 Minutes</p>
              </div>
            </div>
            <div className="flex w-40">
              <img className="w-5" src={time} alt="" />
              <div className="px-2">
                <h6 className="text-sm font-medium">COOK TIME</h6>
                <p>15 Minutes</p>
              </div>
            </div>
            <div className="flex bg-black bg-opacity-10 rounded-3xl w-fit p-3 ml-8">
              <img src={Knife} alt="" /> <p>Chicken</p>
            </div>
          </div>
          <div className="w-full m-10 overflow-hidden rounded-3xl relative">
            <img
              className="absolute top-52 left-96 cursor-pointer"
              src={PlayButton}
              alt=""
            />
            <img className="w-11/12 rounded-3xl" src={image} alt="" />
          </div>
        </div>
        <div className="bg-[#E7FAFE] mx-auto rounded-3xl mt-56 w-96 text-center h-fit p-5">
          <h2 className="text-3xl font-semibold">Nutrition Information</h2>
          <div className="flex w-full justify-between p-5">
            <p>Calories</p>
            <h4>219.9kcal</h4>
          </div>
          <hr />
          <div className="flex justify-between p-5">
            <p>Total Fat</p>
            <h4>10.7g</h4>
          </div>
          <hr />
          <div className="flex justify-between p-5">
            <p>Protein</p>
            <h4>7.9g</h4>
          </div>
          <hr />
          <div className="flex justify-between  p-5">
            <p>Carbohydrate</p>
            <h4>22.3g</h4>
          </div>
          <hr />
          <div className="flex justify-between p-5">
            <p>Cholesterol</p>
            <h4>37.4mg</h4>
          </div>
          <hr />
          <p className="pt-36">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
            minus!
          </p>
        </div>
        <hr />
      </div>
      <div className="p-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum unde
        fuga tempora, necessitatibus vero saepe labore, omnis repudiandae
        quisquam tenetur tempore in minus quod provident repellendus voluptate
        expedita laudantium enim ipsa consequatur debitis, quas error? Quos,
        tempore voluptatem quis quia architecto hic facere debitis minima, sed
        aperiam ad, earum error ab beatae voluptate sequi repudiandae. Eius
        saepe at velit nostrum, dolores culpa rerum accusantium. Nostrum
        repellendus quae magnam minus consequatur!
      </div>
    </>
  );
};

export default NewRecipeDisplay;
