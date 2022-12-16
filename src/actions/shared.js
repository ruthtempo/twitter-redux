import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets"; //action creator

import { receiveUsers } from "./users"; //action creator

export function handleInitialData() {
  // thunk
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
