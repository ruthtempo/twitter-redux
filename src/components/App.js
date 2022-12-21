import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import Nav from "./Nav";
import TweetPage from "./TweetPage";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
            <Route path="/new" element={<NewTweet />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null, //we define a new prop that exists onlly in this component.
});

export default connect(mapStateToProps)(App); // this connects the app to the store via props
