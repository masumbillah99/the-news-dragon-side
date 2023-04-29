import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  // const { _id, title, author, details, image_url, total_view, rating } = news;

  return (
    <>
      {
        news.map(n => console.log(n))
      }
      {/* <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default News;
