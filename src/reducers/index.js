import { combineReducers } from "redux";
import authedUser from "./authedUser";
import tweets from "./tweets";
import users from "./users";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser: authedUser,
  tweets: tweets,
  users: users,
  loadingBar: loadingBarReducer,
});
