import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { myData } from "../data/Data";
import { useData } from "../context/Context";

const SearchBook = () => {
  //   const [searchBook, setSearchBook] = useState();
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  //   console.log(searchBook);

  return (
    <div>
      <input
        type="search"
        placeholder="Enter book name"
        value={state?.searchBook}
        onChange={(e) => {
          navigate("./search");
          dispatch({ type: "SEARCH_BOOK", payload: e.target.value });
          //   setSearchBook(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBook;
