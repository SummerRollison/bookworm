import React from "react";
import { connect } from "react-redux";
import BookSearchForm from "./BookSearchForm";
import { bookSearch } from "../actions";

class BookSearch extends React.Component {
  fetchSearch = searchParams => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=AIzaSyAzEyWhxzmYAGXzsDwcJmVGhF5IMpfnGuc`;
    return fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .then(json => json.items.map(book => book.volumeInfo))
      .then(mappedResults =>
        mappedResults.filter(
          bookResult =>
            Array.isArray(bookResult.industryIdentifiers) &&
            bookResult.industryIdentifiers.length >= 1
        )
      )
      .then(mappedResults => this.props.bookSearch(mappedResults))
      .catch(err => window.alert('Something went wrong, try again'));
  };

  formatSearchParams = formValues => {
    if (formValues.author && formValues.title) {
      return this.fetchSearch(
        `inauthor:${formValues.author}+intitle:${formValues.title}`
      );
    } else if (formValues.author && !formValues.title) {
      return this.fetchSearch(`inauthor:${formValues.author}`);
    } else if (!formValues.author && formValues.title) {
      return this.fetchSearch(`intitle:${formValues.title}`);
    }
  };

  render() {
    return (
      <section>
        <h2 className="text-shadow">Search Books</h2>
        <BookSearchForm handleSubmit={this.formatSearchParams} />
      </section>
    );
  }
}

export default connect(null, { bookSearch })(BookSearch);
