import "./index.css";
import NavigationHeader from "./components/NavigationHeader";
import FeaturedRecipe from "./components/FeaturedRecipe";
import CategoriesPage from "./components/CategoriesPage";

function App() {
  return (
    <>
      <NavigationHeader />
      <FeaturedRecipe />
      <CategoriesPage />
    </>
  );
}

export default App;
