export const initialState = {
  searchBook: "",
  //   currently_reading: [
  //     {
  //       id: 1,
  //       book: "https://i.pinimg.com/236x/23/5f/3a/235f3a3aadbe64853bbfcd46aa4694a1.jpg",
  //       author: "Vaishnavi parate",
  //       currenty_reading: true,
  //       want_to_read: false,
  //       read: false,
  //       none: false,
  //     },
  //   ],
  //   want_to_read: [
  //     {
  //       id: 2,
  //       book: "https://i.pinimg.com/236x/23/5f/3a/235f3a3aadbe64853bbfcd46aa4694a1.jpg",
  //       author: "xyz",
  //       currenty_reading: false,
  //       want_to_read: true,
  //       read: false,
  //       none: false,
  //     },
  //   ],
  //   read: [
  //     {
  //       id: 3,
  //       book: "https://i.pinimg.com/236x/23/5f/3a/235f3a3aadbe64853bbfcd46aa4694a1.jpg",
  //       author: "ijk",
  //       currenty_reading: false,
  //       want_to_read: false,
  //       read: true,
  //       none: false,
  //     },
  //   ],
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
