import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useData } from "../../context/Context";
import { myData } from "../../data/Data";
// import { myData } from "../../data/Data";
import BookCard from "../../component/bookCart";

const Home = () => {
  const { books } = useData();

  const currRead = books.filter(
    (book) => book.category === "Currently Reading"
  );
  const watsToRead = books.filter((book) => book.category === "Want to Read");
  const read = books.filter((book) => book.category === "Read");

  return (
    <div className={styles.mainContainer}>
      <h2>Currently reading</h2>
      <div className={styles.subContainer}>
        <BookCard myBooks={currRead} />
      </div>
      <h2>Want to Read</h2>
      <div className={styles.subContainer}>
        <BookCard myBooks={watsToRead} />
      </div>
      <h2>Read</h2>
      <div className={styles.subContainer}>
        <BookCard myBooks={read} />
      </div>
    </div>
  );
};

export default Home;
