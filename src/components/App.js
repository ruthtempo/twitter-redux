import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : (
        <TweetPage match={{ params: { id: "hbsc73kzqi75rg7v1e0i6a" } }} />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null, //we define a new prop that exists onlly in this component.
});

export default connect(mapStateToProps)(App); // this connects the app to the store via props
