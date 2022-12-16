import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return <div>{props.loading === true ? null : <Dashboard />}</div>;
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null, //we define a new prop that exists onlly in this component.
});

export default connect(mapStateToProps)(App); // this connects the app to the store via props
