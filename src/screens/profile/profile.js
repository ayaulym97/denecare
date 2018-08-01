import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
        <Image source={require("../../assets/icons/profileActive.png")} />
      </View>
    );
  }
}

