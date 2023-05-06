import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  useTitle("Home");

  return (
    <div>
      <h2 className="mb-4">Dragon News Home</h2>
      {categoryNews?.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
