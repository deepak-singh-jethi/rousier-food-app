import React from "react";
import { useSelector } from "react-redux";
import coverImage from "../assets/communityCover.jpeg";
import BaseLayout from "../components/Layout/BaseLayout";

const Community = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <BaseLayout
      coverImage={coverImage}
      mainTitle="Our Blogs"
      subTitle="Latest Blogs"
      array={blogs}
      cardType="community"></BaseLayout>
  );
};

export default Community;
