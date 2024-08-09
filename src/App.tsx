import "./index.css";
import NavigationHeader from "./components/NavigationHeader";
import FeaturedRecipe from "./components/FeaturedRecipe";
import CategoriesPage from "./components/CategoriesPage";
import RecipeDisplay from "./components/RecipeDisplay";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <>
      <NavigationHeader />
      <FeaturedRecipe />
      <CategoriesPage />
      <RecipeDisplay />
      <ImageGrid />
    </>
  );
}

export default App;
