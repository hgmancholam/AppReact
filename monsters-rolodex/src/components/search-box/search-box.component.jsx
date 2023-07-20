import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchString };
    });
  };

  render() {
    const { onSearchHandler, placeHolder, className } = this.props;

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
  }
}

export default SearchBox;
