import ReusableIngredients from "../components/ReusableIngredients";
import FirstImg from "../images/Sec-img.svg";
import SecImg from "../images/Eight-img.svg";
import ThirdImg from "../images/Fifth-img.svg";
import Ads from '../images/Ads.svg'

const IngredientsPage = () => {
    const words = [
        {id: 1, text: 'Lorem ipsum dolor sit amet.'}
    ]
  return (
    <div className="flex p-14">
      <div className="w-10/12">
        <h1 className="font-semibold text-4xl">Ingredients</h1>
        <h2 className="font-semibold text-3xl"></h2>
        {words.map((word) => (
            <li className="py-5">{word.text}</li>
        ))}
        <h2 className="font-semibold text-3xl">For the sauce</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
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
        <img className="" src={Ads} alt="" />
      </div>
    </div>
  );
};

export default IngredientsPage;
