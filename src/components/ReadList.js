import React from "react";
import { connect } from "react-redux";
import { deleteBook } from "../actions";

class ReadList extends React.Component {
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
    const { title, authors, description, imageLinks, id } = book;

    return (
      <div key={id} className="component book-list row">
        <div className="col-1-3">{this.imageCheck(imageLinks)}</div>
        <div col="col-2-3">
          <h3>{title}</h3>
          {this.authorCheck(authors)}
          <p>{description}</p>
        </div>
        <div className="add-buttons">
          <button onClick={() => deleteBook(id)}>Delete</button>
        </div>
      </div>
    );
  };

  mapResults = () => {
    return this.props.filteredBookList.map(book => this.renderBook(book));
  };

  render() {
    return (
      <div className="component">
        <h1>Read</h1>
        {this.mapResults()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const filteredBookList = Object.values(state.bookList).filter(
    title => title.status === "read"
  );
  return { bookList: state.bookList, filteredBookList };
};

export default connect(mapStateToProps, { deleteBook })(ReadList);
