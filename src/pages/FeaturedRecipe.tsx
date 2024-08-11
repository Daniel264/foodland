import MainPicture from "../images/main-pic.svg";
import RightRectangle from "../images/Rectangle 6.svg";
import LeftRectangle from "../images/Rectangle 5.svg";
import HotRecipes from "../images/hot-recipes.svg";
import Knife from "../images/ForkKnife.svg";
import time from "../images/time.svg";
import intersect from "../images/Badge.svg";
import JohnSmith from "../components/JohnSmith";
const FeaturedRecipe = () => {
  return (
    <div className="w-full justify-center h-fit flex font-inter">
      <img className="absolute mt-10" src={intersect} alt="" />
      <img
        className="mr-auto"
        src={LeftRectangle}
        alt="The left side of the Recipe Page"
        loading="lazy"
      />
      <div className="flex w-10/12 overflow-hidden rounded-3xl ">
        <div className="w-1/2 bg-[#E7FAFE] px-16">
          <button className="btn bg-white rounded-3xl mt-16">
            <img src={HotRecipes} alt="" loading="lazy"/>
            Hot Recipes
          </button>
          <h1 className="font-semibold text-5xl py-7">
            Spicy delicious chicken wings
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            praesentium recusandae odit tenetur obcaecati veritatis, exer
          </p>
          <div className="flex pt-10">
            <div className="flex bg-black bg-opacity-10 rounded-3xl w-fit p-2">
              <img src={time} alt="" /> <p>30 Minutes</p>
            </div>
            <div className="flex bg-black bg-opacity-10 rounded-3xl w-fit p-2 ml-8">
              <img src={Knife} alt="" /> <p>Chicken</p>
            </div>
          </div>
          <div className="flex justify-between pt-36">
            <JohnSmith />
            <div>
              <button className="btn bg-black text-white">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img className="" src={MainPicture} alt="" />
        </div>
      </div>
      <img         className="ml-auto"
        src={RightRectangle}
        alt="The right side of the Recipe Page"
      />
    </div>
  );
};

export default FeaturedRecipe;
