import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import HeaderItem from "./headerItem";
import Header from "./header";
import Card from "./card";

class DayMenu extends Component {
  state = {
    currentIndex: 0
  };
  handleCard = nextSlideIndex => {
    if (this.state.currentIndex < nextSlideIndex) {
      this.refs.swiper.scrollBy(
        -1 * (this.state.currentIndex - nextSlideIndex)
      );
    } else {
      this.refs.swiper.scrollBy(nextSlideIndex - this.state.currentIndex);
    }
  };
  handleCardOnPressed = () => {
    this.props.navigation.navigate("RecipeDetail");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <HeaderItem
            title="завтрак"
            image={
              this.state.currentIndex === 0
                ? require("../../assets/icons/breakfastActive.png")
                : require("../../assets/icons/breakfast.png")
            }
            onPress={() => this.handleCard(0)}
          />
          <HeaderItem
            title="перекус"
            image={
              this.state.currentIndex === 1
                ? require("../../assets/icons/snackActive.png")
                : require("../../assets/icons/snack.png")
            }
            onPress={() => this.handleCard(1)}
          />
          <HeaderItem
            title="обед"
            image={
              this.state.currentIndex === 2
                ? require("../../assets/icons/lunchActive.png")
                : require("../../assets/icons/lunch.png")
            }
            onPress={() => this.handleCard(2)}
          />
          <HeaderItem
            title="полдник"
            image={
              this.state.currentIndex === 3
                ? require("../../assets/icons/afternoonSnackActive.png")
                : require("../../assets/icons/afternoonSnack.png")
            }
            onPress={() => this.handleCard(3)}
          />
          <HeaderItem
            title="ужин"
            image={
              this.state.currentIndex === 4
                ? require("../../assets/icons/dinnerActive.png")
                : require("../../assets/icons/dinner.png")
            }
            onPress={() => this.handleCard(4)}
          />
        </View>
        <View style={styles.content}>
          <Swiper
            ref="swiper"
            onIndexChanged={index => this.setState({ currentIndex: index })}
          >
            <Card
              header="Овсяная каша"
              description="каша,приготавлимая из овсяной крупы или хлопье"
              kcal="300ккал"
              time="30мин"
              duration="08:00-10:00"
              onPress={this.handleCardOnPressed}
            />
            <Card
              header="Овсяная каша"
              description="каша,приготавлимая из овсяной крупы или хлопье"
              kcal="300ккал"
              time="30мин"
              duration="11:00-12:00"
            />
            <Card
              header="Овсяная каша"
              description="каша,приготавлимая из овсяной крупы или хлопье"
              kcal="300ккал"
              time="30мин"
              duration="13:00-15:00"
            />
            <Card
              header="Овсяная каша"
              description="каша,приготавлимая из овсяной крупы или хлопье"
              kcal="300ккал"
              time="30мин"
              duration="16:00-17:00"
            />
            <Card
              header="Овсяная каша"
              description="каша,приготавлимая из овсяной крупы или хлопье"
              kcal="300ккал"
              time="30мин"
              duration="18:00-20:00"
            />
          </Swiper>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  headerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  content: {
    flex: 8
  }
});
export default DayMenu;
