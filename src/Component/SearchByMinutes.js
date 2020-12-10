import React, { Component } from "react";

class SearchByMinutes extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const maxReadyTime = e.target.options[e.target.selectedIndex].value;
    this.props.setMaxReadyTime(maxReadyTime);
  }

  componentDidMount() {
    // if a maxReadyTime has been chosen
    if (this.props.maxReadyTime !== "") {
      // find the selected time in dropdown list
      const selectedTime = Array.from(document.querySelectorAll("#minutesDropdown option"))
        .find((option) => option.value === this.props.maxReadyTime);
        
      // select the time
      if (selectedTime !== undefined) {
        selectedTime.selected = true;
      }
    }
  }

  render() {
    return (
      <>
        <label>Time</label>
        <select id="minutesDropdown" onChange={this.onChange}>
          <option value="">select</option> {/* change first option to gray */}
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="40">40 min</option>
            <option value="50">50 min</option>
            <option value="600">60+ min</option>
        </select>
      </>
    );
  }
}

export default SearchByMinutes;
