import React from "react";
import { Image } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Menu,WeekMenu, Shop, Profile } from "../screens/index";
import RecipeDetail from "../screens/menu/recipeDetail"

const menuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  },
  RecipeDetail: {
    screen:RecipeDetail,
    navigationOptions: {
      header: null,
      topTabBar: () => {
        return { 
          visible: false
        }
      }
    }
  }

});
const topMenuTabBar = createMaterialTopTabNavigator({
  Today: {
    screen: menuNavigator,
    navigationOptions:{
      tabBarLabel:'Сегодня',
    }
  },
  Tomorrow: {
    screen: menuNavigator,
    navigationOptions:{
      tabBarLabel:'Завтра'
    }
  },
  Week: {
    screen: WeekMenu,
    navigationOptions:{
      tabBarLabel:'Неделя'
    }
  },

}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#101C1E',
    inactiveTintColor: '#101C1E',
    inactiveBackgroundColor: '#ffffff',
    activeBackgroundColor: '#ffffff',
    showIcon: false,
    indicatorStyle: {
      borderBottomColor: '#101C1E',
      borderBottomWidth: 2,
    },
    labelStyle:{
      fontSize: 9,
      marginTop:20

    },
    style:{
      backgroundColor: '#ffffff',
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
});
const topShopTabBar = createMaterialTopTabNavigator({
  Today: {
    screen: Shop,
    navigationOptions:{
      tabBarLabel:'Сегодня',
    }
  },
  Tomorrow: {
    screen: Shop,
    navigationOptions:{
      tabBarLabel:'Завтра'
    }
  },
  Week: {
    screen: Shop,
    navigationOptions:{
      tabBarLabel:'Неделя'
    }
  },

}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#101C1E',
    inactiveTintColor: '#101C1E',
    inactiveBackgroundColor: '#ffffff',
    activeBackgroundColor: '#ffffff',
    showIcon: false,
    indicatorStyle: {
      borderBottomColor: '#101C1E',
      borderBottomWidth: 2,
    },
    labelStyle:{
      fontSize: 9,
      marginTop:20

    },
    style:{
      backgroundColor: '#ffffff',
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
});

const RootStack = createBottomTabNavigator(
  {
    Menu: {
      screen: topMenuTabBar,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/icons/menu1.png")
                : require("../assets/icons/menu.png")
            }
            style={{width:32,height:32}}
            resizeMode="contain"

          />
        )
      })
    },
    Shops: {
      screen: topShopTabBar,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/icons/shopActive.png")
                : require("../assets/icons/shop.png")
            }
            style={{width:32,height:32}}
            resizeMode="contain"
          />
        )
      })
    },
    Profiles: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? require("../assets/icons/profileActive.png")
                : require("../assets/icons/profile.png")
            }
            style={{width:32,height:32}}
            resizeMode="contain"
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default RootStack;
