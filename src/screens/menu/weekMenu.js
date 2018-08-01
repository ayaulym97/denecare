import React, { Component } from "react";
import { StyleSheet, Text, ScrollView,View } from "react-native";
import Swiper from "react-native-swiper";
import Panel from "./Panel";
import Card from "./card";
import HeaderItem from "./headerItem";
class WeekMenu extends Component {
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
      <ScrollView style={styles.container}>
        <Panel Header="понедельник">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Panel>
        <Panel Header="вторник">
        <View style={styles.headerView}>
          <HeaderItem
            title="завтрак"
            image={this.state.currentIndex === 0 ? require("../../assets/icons/breakfastActive.png"):require("../../assets/icons/breakfast.png")}
            onPress={() => this.handleCard(0)}
          />
          <HeaderItem
            title="перекус"
            image={this.state.currentIndex===1 ? require("../../assets/icons/snackActive.png"):require("../../assets/icons/snack.png")}
            onPress={() => this.handleCard(1)}
          />
          <HeaderItem
            title="обед"
            image={this.state.currentIndex===2 ? require("../../assets/icons/lunchActive.png"): require("../../assets/icons/lunch.png")}
            onPress={() => this.handleCard(2)}
          />
          <HeaderItem
            title="полдник"
            image={this.state.currentIndex===3 ? require("../../assets/icons/afternoonSnackActive.png"):require("../../assets/icons/afternoonSnack.png")}
            onPress={() => this.handleCard(3)}
          />
          <HeaderItem
            title="ужин"
            image={this.state.currentIndex===4 ? require("../../assets/icons/dinnerActive.png"):require("../../assets/icons/dinner.png")}
            onPress={() => this.handleCard(4)}
          />
        </View>
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
        </Panel>
        <Panel Header="среда">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </Panel>
        <Panel Header="четверг">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </Panel>
        <Panel Header="пятница">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </Panel>
        <Panel Header="суббота">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </Panel>
        <Panel Header="воскресенье">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </Panel>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomColor: "#E8E7E7",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default WeekMenu;
