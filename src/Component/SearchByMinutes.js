import React, { Component } from "react";

class SearchByMinutes extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const maxReadyTime = e.target.options[e.target.selectedIndex].value;
    this.props.setMaxReadyTime(maxReadyTime);
  };

  componentDidMount() {
    // if a maxReadyTime has been chosen
    if (this.props.maxReadyTime !== "") {
      // find the selected time in dropdown list
      const selectedTime = Array.from(
        document.querySelectorAll("#minutesDropdown option")
      ).find((option) => option.value === this.props.maxReadyTime);

      // select the time
      if (selectedTime !== undefined) {
        selectedTime.selected = true;
      }
    }
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 25,
          marginTop: 10,
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "quicksand",
            fontWeight: 700,
            fontSize: 26,
          }}
        >
          Time
        </label>
        <select
          id="minutesDropdown"
          style={{
            backgroundColor: "rgba(151, 157, 157, 1)",
            color: "#EAF2F2",
            width: 170,
            fontSize: 20,
            borderRadius: 10,
            border: "none",
            padding: "5px 0 5px 15px",
          }}
          onChange={this.onChange}
        >
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
