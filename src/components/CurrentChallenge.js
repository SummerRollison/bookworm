import React from "react";
import { connect } from "react-redux";
import GoalDisplay from "./GoalDisplay";
import { deleteBook } from "../actions";

class CurrentChallenge extends React.Component {
  deleteBook = bookDetails => {
    return this.props.deleteBook(bookDetails);
  };

  authorCheck = authors => {
    if (authors) {
      return <h4>{authors}</h4>;
    } else {
      return null;
    }
  };

  imageCheck = (image, title) => {
    if (image) {
      return <img src={image.thumbnail} alt={title} />;
    } else {
      return null;
    }
  };

  renderBook = book => {
    const { deleteBook } = this.props;
    const { title, authors, imageLinks, id } = book;

    return (
      <div key={id} className="component book-list row">
        <div className="col-1-3">{this.imageCheck(imageLinks)}</div>
        <div col="col-2-3">
          <h3>{title}</h3>
          {this.authorCheck(authors)}
        </div>
        <div className="add-buttons">
          <button onClick={() => deleteBook(id)}>Delete</button>
        </div>
      </div>
    );
  };

  mapResults = filteredBookList => {
    return filteredBookList.map(book => this.renderBook(book));
  };

  render() {
    return (
      <div className="component">
        <GoalDisplay button="Edit Goal" link="/edit-goal" />
        <h1>Current Challenge Book List</h1>
        {this.mapResults(this.props.filteredBookList)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const filteredBookList = Object.values(state.bookList).filter(
    title => title.currentChallenge
  );

  return {
    filteredBookList
  };
};

export default connect(mapStateToProps, { deleteBook })(CurrentChallenge);
