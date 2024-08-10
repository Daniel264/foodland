import JohnSmith from "../components/JohnSmith";
import time from "../images/time.svg";
import Knife from "../images/ForkKnife.svg";
import Food3 from "../images/Trd-img.svg";

const NewRecipeDisplay = () => {
  return (
    <>
      <div className="flex p-12">
        <div className="w-7/12">
          <h1 className="font-inter font-semibold text-5xl p-5">
            Health Japanese Fried Rice
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
          <div className="w-full m-10 overflow-hidden rounded-3xl">
            <img className="w-full" src={Food3} alt="" />
          </div>
        </div>
        <div className="bg-[#E7FAFE] mx-auto rounded-3xl mt-44 w-96 text-center h-fit p-5">
          <h2 className="text-3xl font-semibold">Nutrition Information</h2>
          <div className="flex w-full justify-between divide-y-[1px] p-5">
            <p>Calories</p>
            <h4>219.9kcal</h4>
          </div>
          <div className="flex justify-between divide-y-[1px] p-5">
            <p>Total Fat</p>
            <h4>10.7g</h4>
          </div>
          <div className="flex justify-between divide-y-[1px] p-5">
            <p>Protein</p>
            <h4>7.9g</h4>
          </div>
          <div className="flex justify-between divide-y-[1px] p-5">
            <p>Carbohydrate</p>
            <h4>22.3g</h4>
          </div>
          <div className="flex justify-between divide-y-[1px] p-5">
            <p>Cholesterol</p>
            <h4>37.4mg</h4>
          </div>
          <p className="pt-24">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
            minus!
          </p>
        </div>
      </div>
      <div className="p-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim consectetur est iure autem, possimus suscipit provident. At hic nam totam fuga quia maiores ipsa animi similique nulla enim perspiciatis omnis tempora eum, officia ducimus accusantium odio! Sapiente, obcaecati. Distinctio aliquid nesciunt neque qui expedita debitis, corporis maiores laborum tenetur quod.</div>
    </>
  );
};

export default NewRecipeDisplay;
