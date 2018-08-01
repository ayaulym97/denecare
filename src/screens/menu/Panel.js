import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
class Panel extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      open: "triangle-down",
      close: "triangle-up"
    };

    this.state = {
      expanded: false
    };
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    let icon = this.icons["open"];
    if (this.state.expanded) {
      icon = this.icons["close"];
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.toggle()}
          underlayColor={"black"}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.Header}>{this.props.Header}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.toggle.bind(this)}
              underlayColor={"black"}
            >
              <Icon style={styles.FAIcon} name={icon} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <ScrollView>
          {this.state.expanded && (
            <ScrollView style={styles.body}>{this.props.children}</ScrollView>
          )}
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    overflow: "hidden"
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    padding:10,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor:'#F0EFEF',
    borderWidth:1,
    alignItems: "center"
  },
  Header: {
    fontSize: 18,
    color: "#101C1E",
    fontFamily:"Times New Roman"
  },
  FAIcon: {
    width: 30,
    height: 30,
    color: 14
  },
  body: {
    padding: 10
  }
});
export default Panel;
