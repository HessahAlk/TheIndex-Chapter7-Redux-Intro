import authors from "../data";

const initialState = {
  authors: authors,
  new_author_id: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        new_author_id: state.new_author_id + 1
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(author => action.payload !== author)
      };
    default:
      return state;
  }
};

export default reducer;
