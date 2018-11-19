import React from 'react';
import './search-bar.css';

const SearchBar = ({
  className = '',
  onSubmit = e => e.preventDefault(),
  ...restProps
}) => (
  <form
    onSubmit={onSubmit}
    className={`search-bar ${className}`}
    {...restProps}
  >
    <input />
    <button>Search</button>
  </form>
);

export default SearchBar;
