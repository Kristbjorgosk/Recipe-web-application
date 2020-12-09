import React, { Component } from "react";
// import { InputLabel } from '@material-ui/core';
class SearchByMinutes extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const maxReadyTime = e.target.options[e.target.selectedIndex].value;
    this.props.setMaxReadyTime(maxReadyTime);
  }

  render() {
    return (
      <form>
        <label>Time</label>
        <select onChange={this.onChange}>
          <option value="">select</option> {/* change first option to gray */}
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="40">40 min</option>
            <option value="50">50 min</option>
            <option value="600">60+ min</option>
        </select>
      </form>
    );
  }
}

export default SearchByMinutes;
