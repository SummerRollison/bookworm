import React from "react";
import { connect } from "react-redux";
import { editGoal, resetGoal } from "../actions";
import GoalForm from "./GoalForm";

class GoalEdit extends React.Component {
  goalChangeSubmit = formValue => {
    this.props.editGoal(formValue.newGoal);
    this.props.history.push("/");
  };

  resetGoal = () => {
    const bookArr = Object.values(this.props.bookList);
    const mappedBooks = bookArr.map(book => (book.currentChallenge = false));

    this.props.resetGoal(mappedBooks);
    this.props.history.push("/current-challenge");
  };

  render() {
    return (
      <div className="component goal-edit">
        <h2>Edit Your Goal</h2>
        <GoalForm
          history={this.props.history}
          handleSubmit={this.goalChangeSubmit}
        />
        <h2>Reset Goal</h2>
        <p>
          Did you hit your goal and want to go again? That's awesome! Hit reset
          and start reading!
        </p>
        <div className="center">
          <button onClick={this.resetGoal}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  };
};

export default connect(mapStateToProps, { editGoal, resetGoal })(GoalEdit);
