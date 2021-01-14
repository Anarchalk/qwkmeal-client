import React, { useState, useEffect } from "react";
import axios from "axios";
// import config from "../../config.js";

export default function LandingPage() {
 //State variables
  const [categories, setCategories] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Food Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.idCategory}>
              <h3>{category.strCategory}</h3>
              <p>{category.strCategoryDescription}</p>
              <img src={category.strCategoryThumb} alt="meal image" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
