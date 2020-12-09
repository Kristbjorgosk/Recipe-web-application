import React, { Component } from "react";

class SearchByMinutes extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const maxReadyTime = e.target.options[e.target.selectedIndex].value;
    this.props.setMaxReadyTime(maxReadyTime);
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="">Search by Time</option> {/* change first option to gray */}
        <option value="10">10 min</option>
        <option value="30">30 min</option>
        <option value="60">60 min</option>
        <option value="120">120 min</option>
        <option value="240">240 min</option>
      </select>
    );
  }
}

export default SearchByMinutes;
