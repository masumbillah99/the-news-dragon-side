import moment from "moment";
import React from "react";
import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, author, details, image_url, total_view, rating } = news;

  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center gap-3 mb-3">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="mt-2 flex-grow-1">
            <p className="mb-0 fw-semibold">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_data).format("yyyy-MM-D")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark /> <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img className="my-4" variant="top" src={image_url}></Card.Img>
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link className="text-decoration-none text-warning" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-secondary d-flex">
          <div className="flex-grow-1">
            <Rating
              readonly
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            ></Rating>
            <span className="ms-2">{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-1" /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
