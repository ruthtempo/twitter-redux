import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    case TOGGLE_TWEET:
      return {
        ...state, // previous tweets on the state
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat(action.authedUser),
        },
      };
    case ADD_TWEET:
      const { tweet } = action; // we grab the tweet
      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat(tweet.id),
          },
        };
      }
      return {
        ...state, // new object with the other tweets ( ...state),
        [action.tweet.id]: action.tweet, // a new key prop that is the tweet id with its text that the action carries
        ...replyingTo, // and from above we spread the replyingTo obj
      };
    default:
      return state;
  }
}
