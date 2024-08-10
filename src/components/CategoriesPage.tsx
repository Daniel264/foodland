import Meat from "../images/image 21.svg";
import Desert from "../images/image 22.svg";
import Vegan from "../images/Vegan.svg";
import Breakfast from "../images/image 25.svg";
import chocolate from "../images/image 24.svg";
import Lunch from "../images/Lunch.svg";

const CategoriesPage = () => {
  return (
    <div className="p-32">
      <div className="flex justify-between pb-14">
        <h1 className="font-semibold text-5xl">Categories</h1>
        <button
          className="btn btn-color hover:cursor-pointer btn-color;
          "
        >
          View all Categories
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col px-10 justify-center rounded-3xl bg-gradient-to-b from-white to-[#f8f2f2]">
          <img src={Breakfast} alt="" />
          <p className="text-2xl font-medium ">Breakfast</p>
        </div>
        <div className="flex flex-col px-10 justify-center rounded-3xl bg-gradient-to-b from-white to-green-50">
          <img src={Vegan} alt="" />
          <p className="text-2xl font-medium ">Vegan</p>
        </div>
        <div className="flex flex-col px-10 justify-center rounded-3xl bg-gradient-to-b from-white to-pink-50">
          <img src={Meat} alt="" />
          <p className="text-2xl font-medium p-4">Meat</p>
        </div>
        <div className="flex flex-col px-10 justify-center rounded-3xl bg-gradient-to-b from-white to-yellow-50">
          <img src={Desert} alt="" />
          <p className="text-2xl font-medium p-4">Desert</p>
        </div>
        <div className="flex flex-col px-10 justify-center rounded-3xl bg-gradient-to-b from-white to-[#f1f0f0]">
          <img src={Lunch} alt="" />
          <p className="text-2xl font-medium p-4">Lunch</p>
        </div>
        <div className="flex flex-col px-10 justify-center rounded-3xl bg-gradient-to-b from-white to-[#e9eced]">
          <img src={chocolate} alt="" />
          <p className="text-2xl font-medium p-4">Chocolate</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
