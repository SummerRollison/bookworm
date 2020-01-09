import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class GoalDisplay extends React.Component {
  booksLeft = () => {
    return this.props.currentGoal - this.props.currentCount;
  };

  goalMessage = props => {
    if (this.booksLeft() <= 0) {
      return (
        <section className="segment">
          <h2>
            Congrats! You reached your goal of reading{" "}
            <span className="bold">{this.props.currentGoal}</span> books!
          </h2>
          <Link to="/edit-goal">
            <button>Let's Go Again!</button>
          </Link>
        </section>
      );
    } else {
      return (
        <section className="segment">
          <h2>
            You have read{" "}
            <span className="bold">{this.props.currentCount}</span> books, only{" "}
            <span className="bold">{this.booksLeft()}</span> more to go!
          </h2>
          <Link to={this.props.link}>
            <button>{this.props.button}</button>
          </Link>
        </section>
      );
    }
  };

  render() {
    return this.goalMessage();
  }
}

const mapStateToProps = state => {
  const filteredBookList = Object.values(state.bookList).filter(
    title => title.currentChallenge
  );
  const currentCount = filteredBookList.length;
  return {
    currentGoal: state.goalTracker.currentGoal,
    filteredBookList,
    currentCount
  };
};

export default connect(mapStateToProps)(GoalDisplay);
