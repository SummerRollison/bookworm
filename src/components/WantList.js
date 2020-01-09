import React from "react";
import { connect } from "react-redux";
import { markAsRead, deleteBook } from "../actions";

class WantList extends React.Component {
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
    const { deleteBook, markAsRead } = this.props;
    const { title, authors, description, imageLinks, id } = book;

    return (
      <div key={id} className="book-list row">
        <div className="col-1-3">{this.imageCheck(imageLinks)}</div>
        <div col="col-2-3">
          <h3 className="bold">{title}</h3>
          {this.authorCheck(authors)}
          <p>{description}</p>
        </div>
        <div className="add-buttons">
          <button onClick={() => markAsRead(book)}>Mark as Read</button>
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
      <section>
        <h1 className="text-shadow heading">Want to Read</h1>
        {this.mapResults()}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const filteredBookList = Object.values(state.bookList).filter(
    title => title.status === "saved"
  );
  return {
    bookList: state.bookList,
    filteredBookList
  };
};

export default connect(mapStateToProps, { markAsRead, deleteBook })(WantList);
