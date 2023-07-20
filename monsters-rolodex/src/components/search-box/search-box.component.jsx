import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onSearchHandler, placeHolder, className } = props;

  return (
    <div>
      <br />
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onSearchHandler}
      />
      <br />
    </div>
  );
};

export default SearchBox;
