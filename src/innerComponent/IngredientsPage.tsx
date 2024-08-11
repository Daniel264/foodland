import ReusableIngredients from "../components/ReusableIngredients";
import FirstImg from "../images/Sec-img.svg";
import SecImg from "../images/Eight-img.svg";
import ThirdImg from "../images/Fifth-img.svg";
import Ads from "../images/Ads.svg";
import Unchecked from "../images/Unchecked.svg";
import Checked from "../images/Checked.svg";
import { useState } from "react";

// Define the types for your props
interface IngredientItem {
  id: number;
  text: string;
  repeatCount: number;
}

interface IngredientsListProps {
  items: IngredientItem[];
  checkedStates: boolean[];
  onImageClick: (index: number) => void;
  offset?: number;
}

const IngredientsList: React.FC<IngredientsListProps> = ({ items, checkedStates, onImageClick, offset = 0 }) => (
  <ul>
    {items.map((item, itemIndex) =>
      Array.from({ length: item.repeatCount }, (_, index) => {
        const listIndex = itemIndex * item.repeatCount + index + offset;
        return (
          <li className="py-5" key={`${item.id}-${listIndex}`}>
            <div className="flex">
              <img
                className="pr-2 hover:cursor-pointer"
                src={checkedStates[listIndex] ? Checked : Unchecked}
                alt=""
                onClick={() => onImageClick(listIndex)}
              />
              {item.text}
            </div>
            <hr className="mt-10" />
          </li>
        );
      })
    )}
  </ul>
);

const IngredientsPage: React.FC = () => {
  const ingredients: IngredientItem[] = [{ id: 1, text: "Lorem ipsum dolor sit amet.", repeatCount: 5 }];
  const sauceIngredients: IngredientItem[] = [{ id: 2, text: "Lorem ipsum dolor sit amet.", repeatCount: 3 }];

  const totalItems = ingredients.reduce((acc, item) => acc + item.repeatCount, 0) +
                     sauceIngredients.reduce((acc, item) => acc + item.repeatCount, 0);
                     
  const [checkedStates, setCheckedStates] = useState<boolean[]>(Array(totalItems).fill(false));

  const handleImageClick = (index: number) => {
    const updatedStates = [...checkedStates];
    updatedStates[index] = !updatedStates[index];
    setCheckedStates(updatedStates);
  };

  return (
    <div className="flex p-14">
      <div className="w-10/12">
        <h1 className="font-semibold text-4xl">Ingredients</h1>
        <IngredientsList
          items={ingredients}
          checkedStates={checkedStates}
          onImageClick={handleImageClick}
        />

        <h2 className="font-semibold text-3xl mt-10">For the sauce</h2>
        <IngredientsList
          items={sauceIngredients}
          checkedStates={checkedStates}
          onImageClick={handleImageClick}
          offset={ingredients.length * 5}
        />
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
