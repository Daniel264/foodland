
import NavigationHeader from "../components/NavigationHeader";
import NewRecipeDisplay from "./NewRecipeDisplay";
import IngredientsPage from "./IngredientsPage";
import Directions from "./Directions";
import SubscriptionPage from "../components/SubscriptionPage";
import Footer from "../components/Footer";
import useScrollToTop from "../scroll";
import OtherRecipes from "./OtherRecipes";

const FullApp = () => {
  useScrollToTop();
  return (
    <>
      <NavigationHeader />
      <NewRecipeDisplay />
      <IngredientsPage />
      <Directions />
      <SubscriptionPage />
      <OtherRecipes />
      <Footer />
    </>
  );
};

export default FullApp;
