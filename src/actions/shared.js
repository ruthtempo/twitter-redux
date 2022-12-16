import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets"; //action creator
import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users"; //action creator

const AUTHED_ID = "tylermcginnis";

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
