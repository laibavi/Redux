import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const myMiddleware = (store) => (next) => (action) => {
  console.log(next, "next");
  console.log(action, "action");
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myMiddleware));

export default store;
