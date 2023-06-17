import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { myData } from "../data/Data";
import { initialState } from "../constant/Constant";
import { ReducerFunc } from "../constant/Constant";
import { fakeFetch } from "../data/Data";

const ContextProvider = createContext();
export const useData = () => useContext(ContextProvider);

const Context = ({ children }) => {
  const [books, setBooks] = useState(myData);
  const [state, dispatch] = useReducer(ReducerFunc, initialState);

  console.log(books);

  const searchedBook =
    state?.searchBook?.length > 0
      ? books?.filter(({ author }) =>
          author?.toLowerCase()?.includes(state?.searchBook?.toLowerCase())
        )
      : "";

  //   console.log(searchedBook);

  return (
    <div>
      <ContextProvider.Provider
        value={{ books, state, dispatch, searchedBook, setBooks }}
      >
        {children}
      </ContextProvider.Provider>
    </div>
  );
};

export default Context;
