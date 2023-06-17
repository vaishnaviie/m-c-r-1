import React from "react";
import { useData } from "../context/Context";

const BookCard = ({ myBooks }) => {
  const categories = ["Currently Reading", "Want to Read", "Read"];
  const { books, setBooks } = useData();

  const clickHandler = (bookId, category) => {
    console.log(bookId, category);
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, category: category } : book
    );
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {myBooks?.map((book) => (
        <li
          key={book.id}
          style={{
            listStyle: "none",
            border: "2px solid red",
            width: "300px",
          }}
        >
          <img src={book.book} alt="pic" />
          <p>{book.author}</p>
          {categories.map((category) => (
            <button onClick={() => clickHandler(book.id, category)}>
              {category}
            </button>
          ))}
        </li>
      ))}
    </div>
  );
};

export default BookCard;
