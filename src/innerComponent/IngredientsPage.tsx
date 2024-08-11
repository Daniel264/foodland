import ReusableIngredients from "../components/ReusableIngredients";
import FirstImg from "../images/Sec-img.svg";
import SecImg from "../images/Eight-img.svg";
import ThirdImg from "../images/Fifth-img.svg";
import Ads from "../images/Ads.svg";
import Unchecked from "../images/Unchecked.svg";

const IngredientsPage = () => {
  const words = [{ id: 1, text: "Lorem ipsum dolor sit amet." }];
  return (
    <div className="flex p-14">
      <div className="w-10/12">
        <h1 className="font-semibold text-4xl">Ingredients</h1>
        <h2 className="font-semibold text-3xl"></h2>
        <ul>
          {words.map((word) =>
            Array.from({ length: 5 }, (_, index) => (
              <li className="py-5" key={`${word.id}-${index}`}>
                <div className="flex">
                  <img className="pr-2 hover:cursor-pointer" src={Unchecked} alt="" />
                  {word.text}
                </div>
                <hr className="mt-10" />
              </li>
            ))
          )}
        </ul>

        <h2 className="font-semibold text-3xl">For the sauce</h2>
        <ul>
          {words.map((word) =>
            Array.from({ length: 3 }, (_, index) => (
              <li className="py-5" key={`${word.id}-${index}`}>
                <div className="flex">
                  <img className="pr-2" src={Unchecked} alt="" />
                  {word.text}
                </div>
                <hr className="mt-10" />
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="pl-32">
        <h2 className="font-semibold text-4xl">Other Recipe</h2>
        <ReusableIngredients
          image={FirstImg}
          text="Chicken Meatball with Creamy Cheese..."
        />
        <ReusableIngredients
          image={SecImg}
          text="The Creamiest Creamy Chicken an..."
        />
        <ReusableIngredients
          image={ThirdImg}
          text="The Best Easy One Pot Chicken and Rice..."
        />
        <img className="pt-10" src={Ads} alt="" />
      </div>
    </div>
  );
};

export default IngredientsPage;
