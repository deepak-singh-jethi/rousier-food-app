import React from "react";
import HeroArea from "./HeroArea";
import BestSeller from "./BestSeller";
import CategoryArea from "./CategoryArea";
import heroImage2 from "../../assets/homehero2.png";
import WhyRosier from "./WhyRosier";

const Home = () => {
  return (
    <div>
      <HeroArea />
      <BestSeller />
      <CategoryArea />
      <img src={heroImage2} className="mt-10" alt="save planet" />
      <WhyRosier />
    </div>
  );
};

export default Home;
