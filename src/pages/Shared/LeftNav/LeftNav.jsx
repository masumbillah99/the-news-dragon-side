import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h4 className="mb-4">All Category</h4>
      <p className="bg-secondary bg-opacity-10 fw-semibold fs-5 w-75 px-5 py-3 rounded">National News</p>
      {categories.map((category) => (
        <p key={category.id} className="px-5">
          <Link
            to={`/category/${category.id}`}
            className="text-secondary text-center fw-semibold fs-5 text-decoration-none"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
