import React from "react";
import { Link } from "react-router-dom";

export const GoalForm = props => {
  const value = React.createRef();

  const onFormSubmit = e => {
    e.preventDefault();
    const formValues = {
      newGoal: value.current.value
    };
    props.handleSubmit(formValues);
  };

  return (
    <form className="center" id="goal-edit-form" onSubmit={onFormSubmit}>
      <label>
        <input name="goal" component="input" type="number" ref={value} />
        <br />
        Number of Books
      </label>
      <div className="row">
        <button type="submit">Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default GoalForm;
