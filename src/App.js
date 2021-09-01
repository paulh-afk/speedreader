import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Header } from "./Components";
import { Inputpanel, Speedread, SpeedText } from "./features";

// ajout de réglages de sensibilité de l'interval en millisecondes

/* eslint-disable-next-line import/no-anonymous-default-export */
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      speedtext: document.cookie.slice(10, document.cookie.length) || "",
      wordsArray: document.cookie
        .slice(10, document.cookie.length)
        .split(" ") || [""],
      isInterval: false,
    };
  }

  addText = ({ speedtext }) => {
    const wordsArray = speedtext.split(" ");
    document.cookie = "speedtext=" + speedtext;
    this.setState({ speedtext, wordsArray });
  };

  resetIndex = () => {
    this.setState({ index: 0 });
  };

  startInterval = () => {
    this.intervalID = setInterval(
      () => this.setState((state) => ({ index: state.index + 1 })),
      300
    );
    this.setState({ isInterval: true });
  };

  stopInterval = () => {
    clearInterval(this.intervalID);
    this.setState({ isInterval: false });
  };

  render() {
    return (
      <Router>
        <div className="site-wrapper">
          <Header />
          <div className="site-main">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Inputpanel addText={this.addText} />}
              />
              <Route
                path="/speedreader"
                render={() => (
                  <Speedread
                    wordsArray={this.state.wordsArray}
                    startInterval={this.startInterval}
                    stopInterval={this.stopInterval}
                    index={this.state.index}
                    isInterval={this.state.isInterval}
                    resetIndex={this.resetIndex}
                  />
                )}
              />
              <Route path="/speedtexts" component={SpeedText} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
