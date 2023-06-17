import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useData } from "../../context/Context";
// import { myData } from "../../data/Data";

const Home = () => {
  const { books } = useData();

  const currentlyReading = books?.filter((data) => data.currenty_reading);
  const wantToRead = books?.filter((data) => data.want_to_read);
  const readd = books?.filter((data) => data.read);

  const currReadHandler = (ID) => {
    console.log(ID);
    const v = books.find((book) => book.id === ID);
    console.log((v.currenty_reading = false));
    console.log(v);
  };
  const wantsToReadHandler = (ID) => {
    console.log(ID);
    const v = books.find((book) => book.id === ID);
    console.log((v.want_to_read = false));
    console.log(v);
  };
  const readReadHandler = (ID) => {
    console.log(ID);
    const v = books.find((book) => book.id === ID);
    console.log((v.read = false));
    console.log(v);
  };
  //   console.log(myData);

  return (
    <div className={styles.mainContainer}>
      <h2>Currently reading</h2>
      <div className={styles.subContainer}>
        {currentlyReading?.map((book) => (
          <li
            key={book.id}
            style={{
              listStyle: "none",
              border: "2px solid red",
              width: "40vw",
            }}
          >
            <img src={book.book} alt="pic" />
            <p>{book.author}</p>
            <button onClick={() => currReadHandler(book.id)}>
              Currently Reading
            </button>
            <button onClick={() => wantsToReadHandler(book.id)}>
              Wants to Read
            </button>
            <button onClick={() => readReadHandler(book.id)}>Read</button>
          </li>
        ))}
      </div>
      <h2>Want to Read</h2>
      <div className={styles.subContainer}>
        {wantToRead?.map((book) => (
          <li
            style={{
              listStyle: "none",
              border: "2px solid red",
              width: "40vw",
            }}
          >
            <img src={book.book} alt="pic" />
            <p>{book.author}</p>
            <button>Currently Reading</button>
            <button>Wants to Read</button>
            <button>Read</button>
          </li>
        ))}
      </div>
      <h2 className={styles.subContainer}>Read</h2>
      <div>
        {readd?.map((book) => (
          <li style={{ listStyle: "none", border: "2px solid red" }}>
            <img src={book.book} alt="pic" />
            <p>{book.author}</p>
            <button>Currently Reading</button>
            <button>Wants to Read</button>
            <button>Read</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
