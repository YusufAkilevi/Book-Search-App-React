import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
import DetailsContext from "./details-context";
import { DetailsContextProvider } from "./details-context";
import BookDetails from "./components/BookDetails";

function App() {
  const [bookList, setBookList] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const selectedBook = useContext(DetailsContext);
  const [isSelected, setIsSelected] = useState(selectedBook.isSelected);
  const [error, setError] = useState({ message: "", isError: false });
  useEffect(() => {
    setIsSelected(selectedBook.isSelected);
  }, [selectedBook.isSelected]);

  const getBooksData = async (searchText) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
    );
    const data = await res.json();

    if (data.totalItems === 0) {
      setError({ message: searchText, isError: true });
      return;
    } else {
      setError({ message: searchText, isError: false });
      setBookList(data.items);
    }
  };

  const getSearchText = (searchText) => {
    getBooksData(searchText);
  };

  const selectedBookHandler = (id) => {
    setSelectedBookId(id);
    selectedBook.isSelected = true;
    setIsSelected(true);
  };
  const closeModalHandler = () => {
    setIsSelected(false);
    selectedBook.isSelected = false;
  };

  return (
    <div className="App" style={{ position: isSelected ? "fixed" : "" }}>
      <DetailsContextProvider>
        <BookSearch onGetSearchText={getSearchText} />
        {error.isError ? (
          <p>{`There is no book named "${error.message}". Please try another one.`}</p>
        ) : (
          <React.Fragment>
            {bookList.length !== 0 && (
              <BookList onSelected={selectedBookHandler} bookList={bookList} />
            )}
            {selectedBook.isSelected && (
              <div onClick={closeModalHandler} className="backdrop" />
            )}
            {selectedBook.isSelected && (
              <BookDetails
                onClose={closeModalHandler}
                book={bookList.find((book) => book.id === selectedBookId)}
              />
            )}
          </React.Fragment>
        )}
      </DetailsContextProvider>
    </div>
  );
}

export default App;
