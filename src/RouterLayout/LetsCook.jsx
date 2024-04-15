import React from "react";
import BaseLayout from "../components/Layout/BaseLayout";
import { useSelector } from "react-redux";

const LetsCook = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div>
      <BaseLayout
        mainTitle="Our Recipies"
        subTitle="Latest Recipies"
        array={recipes}
        cardType="recipe"></BaseLayout>
    </div>
  );
};

export default LetsCook;
