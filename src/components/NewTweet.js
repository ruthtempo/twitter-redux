import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Todo: add tweet to the store
    dispatch(handleAddTweet(text, id)); // we get dispatch from props
    console.log(text);
    setText("");
  };

  const tweetLeft = 280 - text.length;
  return (
    <div>
      <h3 className="center">Compone new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />

        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={!text.length}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet); // gives us access to dispatch in the component
