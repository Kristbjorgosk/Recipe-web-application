import React, { Component } from "react";

class SearchByRecipe extends Component {
  onKeyDown = (e) => {
    // if user presses Enter
    if (e.keyCode === 13) {
      // get query from textbox
      const query = e.target.value;

      // set query to props
      this.props.setQuery(query);
    }
  };

  render() {
    return (
      <input
        style={{
          maxWidth: 300,
          lineHeight: 2,
          fontSize: 20,
          borderRadius: "50px 0 0 50px",
          outline: "none",
          display: "flex",
          paddingLeft: 15,
          border: "none",
        }}
        type="search"
        onKeyDown={this.onKeyDown}
        placeholder="search for recipes..."
      />
    );
  }
}

export default SearchByRecipe;
