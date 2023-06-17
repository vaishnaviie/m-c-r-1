import React from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/Context";

const Search = () => {
  const { searchedBook } = useData();
  const navigate = useNavigate();
  //   console.log(searchedBook);
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      {searchedBook.length > 0 &&
        searchedBook?.map((book) => (
          <li>
            <img src={book.book} alt="pic" />
            <p>{book.author}</p>
          </li>
        ))}
    </div>
  );
};

export default Search;
