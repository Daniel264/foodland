import NavigationHeader from "./components/NavigationHeader";
import "./index.css";
import NewRecipeDisplay from "./innerComponent/NewRecipeDisplay";
// import NavigationHeader from "./components/NavigationHeader";
// import FeaturedRecipe from "./pages/FeaturedRecipe";
// import CategoriesPage from "./pages/CategoriesPage";
// import RecipeDisplay from "./pages/RecipeDisplay";
// import ImageGrid from "./pages/ImageGrid";
// import ChefSide from "./pages/ChefSide";
// import SocialMedia from "./pages/SocialMedia";
// import SecondRecipePage from "./pages/SecondRecipePage";
// import SubscriptionPage from "./components/SubscriptionPage";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <NavigationHeader />
      <FeaturedRecipe />
      <CategoriesPage />
      <RecipeDisplay />
      <ImageGrid />
      <ChefSide />
      <SocialMedia />
      <SecondRecipePage />
      <SubscriptionPage />
      <Footer /> */}

      <NavigationHeader />
      <NewRecipeDisplay />
    </>
  );
}

export default App;
