import "./index.css";
import NavigationHeader from "./components/NavigationHeader";
import FeaturedRecipe from "./components/FeaturedRecipe";
import CategoriesPage from "./components/CategoriesPage";
import RecipeDisplay from "./components/RecipeDisplay";
import ImageGrid from "./components/ImageGrid";
import ChefSide from "./components/ChefSide";
import SocialMedia from "./components/SocialMedia";
import SecondRecipePage from "./components/SecondRecipePage";
import SubscriptionPage from "./components/SubscriptionPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationHeader />
      <FeaturedRecipe />
      <CategoriesPage />
      <RecipeDisplay />
      <ImageGrid />
      <ChefSide/>
      <SocialMedia />
      <SecondRecipePage />
      <SubscriptionPage />
      <Footer />
    </>
  );
}

export default App;
