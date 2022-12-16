import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => (
          <li key={id}>
            <div>TWEET ID: {id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => ({
  // we receive this state from store.
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp //sort tweets by timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);