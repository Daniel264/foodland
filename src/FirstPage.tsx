import React from "react";
import Footer from "./components/Footer";
import NavigationHeader from "./components/NavigationHeader";
import SubscriptionPage from "./components/SubscriptionPage";
import CategoriesPage from "./pages/CategoriesPage";
import ChefSide from "./pages/ChefSide";
import FeaturedRecipe from "./pages/FeaturedRecipe";
import ImageGrid from "./pages/ImageGrid";
import RecipeDisplay from "./pages/RecipeDisplay";
import SecondRecipePage from "./pages/SecondRecipePage";
import SocialMedia from "./pages/SocialMedia";

const FirstPage = () => {
  return (
    <>
      <NavigationHeader />
      <FeaturedRecipe />
      <CategoriesPage />
      <RecipeDisplay />
      <ImageGrid />
      <ChefSide />
      <SocialMedia />
      <SecondRecipePage />
      <SubscriptionPage />
      <Footer />
    </>
  );
};

export default FirstPage;
