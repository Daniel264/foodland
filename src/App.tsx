import "./index.css";
import NavigationHeader from "./components/NavigationHeader";
import FeaturedRecipe from "./components/FeaturedRecipe";
import CategoriesPage from "./components/CategoriesPage";
import RecipeDisplay from "./components/RecipeDisplay";

function App() {
  return (
    <>
      <NavigationHeader />
      <FeaturedRecipe />
      <CategoriesPage />
      <RecipeDisplay />
    </>
  );
}

export default App;
