import React from "react";
import RootStack from "./src/router";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RootStack />
      </React.Fragment>
    );
  }
}
