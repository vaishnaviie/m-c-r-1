export const initialState = {
  searchBook: "",
};

export const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "SEARCH_BOOK": {
      return {
        ...state,
        searchBook: action.payload,
      };
    }

    default:
      break;
  }
};
