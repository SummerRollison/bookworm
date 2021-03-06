import React from "react";

export const BookSearchForm = props => {
  const title = React.createRef();
  const author = React.createRef();

  const onFormSubmit = e => {
    e.preventDefault();
    const formValues = {
      title: title.current.value,
      author: author.current.value
    };
    props.handleSubmit(formValues);
    document.getElementById("Book-Search-Form").reset();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} id="Book-Search-Form">
        <div className="row">
          <div className="col-1-2">
            <input type="text" id="title" ref={title} placeholder="Title" />
          </div>
          <div className="col-1-2">
            <input type="text" id="author" ref={author} placeholder="Author" />
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default BookSearchForm;
