import React from "react";
import HeroArea from "./HeroArea";
import BestSeller from "./BestSeller";
import CategoryArea from "./CategoryArea";
import heroImage2 from "../../assets/homehero2.png";
import WhyRosier from "./WhyRosier";
import CookingRosier from "./CookingRosier";
import Community from "./Community";
import footerImage from "../../assets/footer/10034.png";

const Home = () => {
  return (
    <div>
      <HeroArea />
      <BestSeller />
      <CategoryArea />
      <img src={heroImage2} className="mt-10" alt="save planet" />
      <WhyRosier />
      <CookingRosier />
      <Community />
      <img src={footerImage} alt="" />
    </div>
  );
};

export default Home;
