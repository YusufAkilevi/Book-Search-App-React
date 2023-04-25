import React from "react";

const DetailsContext = React.createContext({ selectedBook: {} });

export const DetailsContextProvider = (props) => {
  const values = {
    selectedBook: {},
    isSelected: false,
  };
  return (
    <DetailsContext.Provider value={values}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsContext;
