import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets"; //action creator
import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users"; //action creator
import { hideLoading, showLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  // thunk
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
