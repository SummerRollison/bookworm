import React from "react";
import { connect } from "react-redux";

import { saveBook, markAsRead } from "../actions";

class SearchDisplay extends React.Component {
  bookCheck = book => {
    const { saveBook, markAsRead } = this.props;

    if (
      this.props.bookList.hasOwnProperty(book.industryIdentifiers[0].identifier)
    ) {
      return <h2 className="saved-book">Saved!</h2>;
    } else {
      return (
        <div className="add-buttons">
          <button onClick={() => saveBook(book)}>Want to Read</button>
          <button onClick={() => markAsRead(book)}>Mark as Read</button>
        </div>
      );
    }
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

  renderBook = (book, index) => {
    const {
      title,
      authors,
      description,
      imageLinks,
      industryIdentifiers
    } = book;

    return (
      <div
        key={industryIdentifiers[0].identifier}
        className="component book-list row"
      >
        <div className="col-1-3">{this.imageCheck(imageLinks, title)}</div>
        <div className="col-2-3">
          <h3 className="bold">{title}</h3>
          {this.authorCheck(authors)}
          <p>{description}</p>
        </div>
        {this.bookCheck(book)}
      </div>
    );
  };

  mapResults = () => {
    return this.props.searchList.map(this.renderBook);
  };

  render() {
    return <section>{this.mapResults(this.bookList)}</section>;
  }
}

const mapStateToProps = state => {
  return {
    searchList: state.searchList.searchData,
    bookList: state.bookList
  };
};

export default connect(mapStateToProps, { saveBook, markAsRead })(
  SearchDisplay
);
