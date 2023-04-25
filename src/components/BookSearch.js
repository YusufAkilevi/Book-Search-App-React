import React, { useEffect, useState } from "react";
import classes from "./BookSearch.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const BookSearch = (props) => {
  const [searchText, setSearchText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onGetSearchText(searchText);
    setSearchText("");
  };

  const bookChangeHandler = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <React.Fragment>
      <div className={classes["search-box"]}>
        <h1>Book Searching App</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <input
            value={searchText}
            type="text"
            placeholder="Search for a book"
            onChange={bookChangeHandler}
          />
          <button type="submit">
            <MagnifyingGlassIcon className={`${classes.icon} w-6 h-6`} />
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default BookSearch;
