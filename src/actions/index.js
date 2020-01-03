import {
  SAVE_BOOK,
  MARK_AS_READ,
  EDIT_GOAL,
  RESET_GOAL,
  BOOK_SEARCH,
  DELETE_BOOK
} from "./types";
// import googleBook from "../apis/googleBook";

export const saveBook = bookData => {
  return {
    type: SAVE_BOOK,
    payload: bookData
  };
};

export const markAsRead = bookData => {
  return {
    type: MARK_AS_READ,
    payload: bookData
  };
};

export const editGoal = num => {
  return {
    type: EDIT_GOAL,
    payload: num
  };
};

export const resetGoal = bookList => {
  return {
    type: RESET_GOAL,
    payload: bookList
  };
};

export const bookSearch = searchResults => {
  return {
    type: BOOK_SEARCH,
    payload: searchResults
  };
};

export const deleteBook = bookID => {
  return {
    type: DELETE_BOOK,
    payload: bookID
  };
};
