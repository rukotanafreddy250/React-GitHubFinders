import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
    alert: null,
  };

  onChange = (e) => {
    // this.setState({ text: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      // this.setState({ alert: ["please enter something...", "light"] });
      // this.props.setAlert(this.state.alert);
      this.props.setAlert("Please Enter Something...", "danger");
    } else {
      console.log(this.state.text);
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search github Users..."
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {/* {this.props.showClear == true && ( */}
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        {/* )} */}
      </div>
    );
  }
}
