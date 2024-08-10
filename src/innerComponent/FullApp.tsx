import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import NewRecipeDisplay from "./NewRecipeDisplay";
import IngredientsPage from "./IngredientsPage";

const FullApp = () => {
  return (
    <>
      <NavigationHeader />
      <NewRecipeDisplay />
      <IngredientsPage />
    </>
  );
};

export default FullApp;
