import { combineReducers } from "redux";
import { get, set } from "./localStorage";

import {
  EDIT_GOAL,
  RESET_GOAL,
  MARK_AS_READ,
  SAVE_BOOK,
  BOOK_SEARCH,
  DELETE_BOOK
} from "../actions/types";

const cache = set.bind(this);
const bookCache = get("bookCache") || {};
const goalCache = get("goalCache") || {};

let INITIAL_STATE = {
  goalTracker: {
    currentGoal: goalCache.currentGoal || 50
  },
  bookList: bookCache || {},
  searchList: {
    searchData: []
  }
};

function goalReducer(state = INITIAL_STATE.goalTracker, action) {
  let newState;
  switch (action.type) {
    case EDIT_GOAL:
      newState = { ...state, currentGoal: action.payload };
      cache("goalCache", newState);
      return newState;
    default:
      return state;
  }
}

function searchReducer(state = INITIAL_STATE.searchList, action) {
  switch (action.type) {
    case BOOK_SEARCH:
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
}

function bookReducer(state = INITIAL_STATE.bookList, action) {
  var id, newBook, newState;
  switch (action.type) {
    case MARK_AS_READ:
      newBook = Object.assign({}, action.payload, {
        status: "read",
        currentChallenge: true
      });
      id = newBook.industryIdentifiers[0].identifier;
      newBook.id = id;
      newState = Object.assign({}, state, {
        [id]: newBook
      });
      cache("bookCache", newState);
      return newState;
    case SAVE_BOOK:
      newBook = Object.assign({}, action.payload, {
        status: "saved"
      });
      id = newBook.industryIdentifiers[0].identifier;
      newBook.id = id;
      newState = Object.assign({}, state, {
        [id]: newBook
      });
      cache("bookCache", newState);
      return newState;
    case DELETE_BOOK:
      newState = { ...state };
      delete newState[action.payload];
      cache("bookCache", newState);
      return newState;
    case RESET_GOAL:
      newState = { ...state, currentChallenge: false };
      cache("bookCache", newState);
      return newState;
    default:
      return state;
  }
}

export default combineReducers({
  goalTracker: goalReducer,
  bookList: bookReducer,
  searchList: searchReducer
});
