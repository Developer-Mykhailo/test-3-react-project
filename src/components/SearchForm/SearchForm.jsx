// import React from 'react'

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.searchText;
    onSubmit(value);
    e.target.elements.searchText.value = "";
  };

  //JSX
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchText" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
