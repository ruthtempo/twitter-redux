import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";

function Tweet(props) {
  const handleLike = (e) => {
    e.preventDefault();
    const { dispatch, tweet, authedUser } = props;
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser,
      })
    );
    // TODO: Handle like Tweet
  };

  const toParent = (e, id) => {
    e.preventDefault();

    // TODO: Redirect to parent Tweet
  };
  if (props.tweet === null) {
    return <p> this tweet does not exist</p>;
  }
  const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } =
    props.tweet;

  return (
    <div className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  // id is "ownProps" --> the props passed to the Tweet component
  // here goes the information that we pass from the store to the tweet component
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);
