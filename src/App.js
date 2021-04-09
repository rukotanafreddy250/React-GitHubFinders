import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/users/Alert";
import About from "./components/pages/About";
import Axios from "axios";
import "./App.css";
// import propTypes from "prop-types";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}'&client_secrect=${process.env.REACT_APP_GITHUB_CLIENT_SECRECT}}`
  //   ).then((res) => {
  //     this.setState({
  //       users: res.data,
  //       loading: false,
  //     });
  //   });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    console.log(text);
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}'&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // .then((res) => {
    this.setState({
      users: res.data.items,
      loading: false,
    });
    // });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false, alert: null });
  };
  setAlert = (msg, type) => {
    console.log(msg);
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
