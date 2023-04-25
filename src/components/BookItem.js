import React from "react";
import classes from "./BookItem.module.css";
const BookItem = (props) => {
  const detailsClickHandler = (e) => {
    props.onSelected(e.target.dataset.id);
  };

  return (
    <li className={classes["book-item"]}>
      <img
        src={
          props.book.volumeInfo.imageLinks
            ? props.book.volumeInfo.imageLinks.thumbnail
            : "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        alt="thumbnail photo"
        loading="lazy"
      />
      <div className={classes.links}>
        <a
          href={
            props.book.volumeInfo.previewLink
              ? props.book.volumeInfo.previewLink
              : "#"
          }
          target="_blank"
        >
          Preview
        </a>
        <button data-id={props.book.id} onClick={detailsClickHandler}>
          Details
        </button>
      </div>
      <h3> {props.book.volumeInfo?.title}</h3>
      {props.book.volumeInfo.authors ? (
        <p>{props.book.volumeInfo.authors[0]}</p>
      ) : (
        <p>{"Unknown"}</p>
      )}
    </li>
  );
};

export default BookItem;
