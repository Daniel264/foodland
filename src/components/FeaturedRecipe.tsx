import RecipePage from "../images/Featured Recipe.svg";
import RightRectangle from "../images/Rectangle 6.svg";
import LeftRectangle from "../images/Rectangle 5.svg";
const FeaturedRecipe = () => {
  return (
    <div className="w-full justify-center h-fit flex">
      <img className="mr-auto" src={LeftRectangle} alt="The left side of the Recipe Page" />
      <img src={RecipePage} alt="Recipe Image" />
      <img className="ml-auto" src={RightRectangle} alt="The right side of the Recipe Page" />
    </div>
  );
};

export default FeaturedRecipe;
