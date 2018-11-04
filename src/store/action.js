const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const add_author = new_author_id => {
  let new_author = {
    first_name: "Author",
    last_name: `${new_author_id}`,
  };
  return {
    type: ADD_AUTHOR,
    payload: new_author
  };
};

export const delete_author = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
