import React from "react";
import BookItem from "./BookItem";
import classes from "./BookList.module.css";
const BookList = (props) => {
  return (
    <ul className={classes["book-list"]}>
      {props.bookList.map((book) => {
        return (
          <BookItem onSelected={props.onSelected} key={book.id} book={book} />
        );
      })}
    </ul>
  );
};

export default BookList;
