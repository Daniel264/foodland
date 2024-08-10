import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import NewRecipeDisplay from "./NewRecipeDisplay";
import IngredientsPage from "./IngredientsPage";
import Directions from "./Directions";

const FullApp = () => {
  return (
    <>
      <NavigationHeader />
      <NewRecipeDisplay />
      <IngredientsPage />
      <Directions />
    </>
  );
};

export default FullApp;
