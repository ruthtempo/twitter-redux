import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import { NewTweet } from "./NewTweet";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : <NewTweet />}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null, //we define a new prop that exists onlly in this component.
});

export default connect(mapStateToProps)(App); // this connects the app to the store via props
