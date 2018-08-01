import React, { Component } from "react";
import {
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { Checkbox } from "react-native-paper";
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      ingredients: [
        {
          name: "хлеб",
          amount: "2шт"
        },
        {
          name: "мука",
          amount: "3стакан"
        },
        {
          name: "сахар",
          amount: "1ч.л"
        },
        {
          name: "сахар",
          amount: "1ч.л"
        },
        {
          name: "сахар",
          amount: "1ч.л"
        },
        {
          name: "сахар",
          amount: "1ч.л"
        },
        {
          name: "сахар",
          amount: "1ч.л"
        },
        {
          name: "сахар",
          amount: "1ч.л"
        },
        {
          name: "хлеб",
          amount: "2шт"
        },
        {
          name: "мука",
          amount: "3стакан"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.setState({ checked: !this.state.checked });
                console.log("HELLO",this.state.checked)
              }}
            >
              <View style={styles.checkbox}>
            
                 
                  <Image
                    style={styles.checkIcon}
                    resizeMode="contain"
                    source={
                      this.state.checked
                        ? require("../../assets/icons/checkActive.png")
                        : require("../../assets/icons/check.png")
                    }
                  />
              </View>
              <View style={styles.main}>
                <Text style={styles.nameTxt}>{item.name}</Text>
                <Text style={styles.amountTxt}>{item.amount}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB"
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FBFBFB"
  },
  checkbox: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    justifyContent: "center"
  },

  main: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 3,
    borderColor: "#F8F9F8",
    borderWidth: 2
  },
  nameTxt: {
    color: "#101C1E",
    fontSize: 16
  },
  amountTxt: {
    color: "#6E7B8D",
    fontSize: 14
  },
  checkIcon: {
    // width: 25,
    // height: 25
  }
});
export default Shop;
