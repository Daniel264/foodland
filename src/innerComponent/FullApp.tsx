import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import NewRecipeDisplay from "./NewRecipeDisplay";
import IngredientsPage from "./IngredientsPage";
import Directions from "./Directions";
import SubscriptionPage from "../components/SubscriptionPage";
import Footer from "../components/Footer";

const FullApp = () => {
  return (
    <>
      <NavigationHeader />
      <NewRecipeDisplay />
      <IngredientsPage />
      <Directions />
      <SubscriptionPage />
      <Footer />
    </>
  );
};

export default FullApp;
