import React, { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classes from "./BookDetails.module.css";

const BookDetails = (props) => {
  return (
    <div className={classes["book-details"]}>
      <button onClick={props.onClose} className={classes.closeBtn}>
        <XMarkIcon className={classes.icon} />
      </button>
      <div>
        <img
          src={
            props.book.volumeInfo.imageLinks
              ? props.book.volumeInfo.imageLinks.thumbnail
              : "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          alt="thumbnail photo"
          loading="lazy"
        />
      </div>
      <div className={classes.details}>
        <h3> {props.book.volumeInfo.title}</h3>
        <p>
          <strong>Authors: </strong>
          {props.book.volumeInfo.authors
            ? props.book.volumeInfo.authors.join(", ")
            : "Unknown"}
        </p>
        <p>
          <strong>Language: </strong>
          {props.book.volumeInfo.language
            ? new Intl.DisplayNames(["en"], {
                type: "language",
              }).of(props.book.volumeInfo.language)
            : "Unknown"}
        </p>

        <p>
          <strong>Categories: </strong>
          {props.book.volumeInfo.categories
            ? props.book.volumeInfo.categories.join(", ")
            : "Unknown"}
        </p>
        <p>
          <strong>Publisher: </strong>{" "}
          {props.book.volumeInfo.publisher
            ? props.book.volumeInfo.publisher
            : "Unknown"}
        </p>
        <p>
          <strong>Publication Date: </strong>{" "}
          {props.book.volumeInfo.publishedDate
            ? props.book.volumeInfo.publishedDate
            : "Unknown"}
        </p>
        <p>
          <strong>Print Length: </strong>{" "}
          {props.book.volumeInfo.pageCount
            ? `${props.book.volumeInfo.pageCount} pages`
            : "Unknown"}
        </p>
        <p>
          <strong>Description: </strong>{" "}
          {props.book.volumeInfo.description
            ? props.book.volumeInfo.description
            : "---"}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
