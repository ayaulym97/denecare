import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";

class RecipeDetail extends Component {
  state = {
    ingredients: [
      {
        image: require("../../assets/img/milk.png"),
        name: "молоко",
        amount: "2шт"
      },
      {
        image: require("../../assets/img/milk.png"),
        name: "молоко",
        amount: "3стакан"
      },
      {
        image: require("../../assets/img/milk.png"),
        name: "молоко",
        amount: "1ч.л"
      },
      {
        image: require("../../assets/img/milk.png"),
        name: "молоко",
        amount: "1ч.л"
      },
      {
        image: require("../../assets/img/milk.png"),
        name: "молоко",
        amount: "1ч.л"
      },
      {
        image: require("../../assets/img/milk.png"),
        name: "молоко",
        amount: "1ч.л"
      }
    ],
    instructions: [
      {
        id: 1,
        instruction:
          "Промойте 1 стакан зерен, удалите сор и шелуху.Овсянку замочите в холодной кипяченой воде на 30-60 минут."
      },
      {
        id: 2,
        instruction:
          "Промойте 1 стакан зерен, удалите сор и шелуху. Овсянку замочите в холодной кипяченой воде на 30-60 минут."
      },
      {
        id: 3,
        instruction:
          "Промойте 1 стакан зерен, удалите сор и шелуху. Овсянку замочите в холодной кипяченой воде на 30-60 минут."
      },
      {
        id: 4,
        instruction:
          "Промойте 1 стакан зерен, удалите сор и шелуху. Овсянку замочите в холодной кипяченой воде на 30-60 минут."
      },
      {
        id: 5,
        instruction:
          "Промойте 1 стакан зерен, удалите сор и шелуху. Овсянку замочите в холодной кипяченой воде на 30-60 минут."
      },
      {
        id: 6,
        instruction:
          "Промойте 1 стакан зерен, удалите сор и шелуху. Овсянку замочите в холодной кипяченой воде на 30-60 минут."
      }
    ]
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image
          source={require("../../assets/img/oatDetail.png")}
          style={styles.recipeImage}
        />
        <View style={styles.infoView}>
          <Text style={styles.recipeName}>Овсяная каша</Text>
          <View style={styles.subView}>
            <Text style={styles.subTitle}>30мин.</Text>
            <Text style={styles.subTitle}>30ккал</Text>
          </View>
          <View style={styles.calView}>
            <View style={styles.subCalView}>
              <Text style={styles.subTitle}>белки</Text>
              <Text style={styles.subTitleAmmount}>35г</Text>
            </View>
            <View style={styles.subCalView}>
              <Text style={styles.subTitle}>жиры</Text>
              <Text style={styles.subTitleAmmount}>35г</Text>
            </View>
            <View style={styles.subCalView}>
              <Text style={styles.subTitle}>углеводы</Text>
              <Text style={styles.subTitleAmmount}>35г</Text>
            </View>
          </View>
        </View>
        <View style={styles.ingredientView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>ингредиенты</Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/minus.png")}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text style={styles.subTitle}>1</Text>
              <Image
                source={require("../../assets/icons/portion.png")}
                style={styles.icon}
                resizeMode="contain"
              />
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/plus.png")}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ingredientContent}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flex: 4, backgroundColor: "#FCFDFF" }}
              data={this.state.ingredients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.product}>
                  <Image
                    style={styles.productImage}
                    resizeMode="contain"
                    source={item.image}
                  />
                  <Text style={styles.nameTxt}>{item.name}</Text>
                  <Text style={styles.amountTxt}>{item.amount}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.ingredientView}>
          <Text style={styles.header}>посуда</Text>

          <View style={styles.ingredientContent}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flex: 4, backgroundColor: "#FCFDFF" }}
              data={this.state.ingredients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.product}>
                  <Image
                    style={styles.productImage}
                    resizeMode="contain"
                    source={item.image}
                  />
                  <Text style={styles.nameTxt}>{item.name}</Text>
                  <Text style={styles.amountTxt}>{item.amount}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.ingredientView}>
          <Text style={styles.header}>инструкция</Text>

          <View style={styles.ingredientContent}>
            <FlatList
              style={{ flex: 4, backgroundColor: "#FCFDFF" }}
              data={this.state.instructions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: "row",alignItems: "center",
                justifyContent: "space-between" }}>
                  <Text style={styles.nameTxt}>{item.id}</Text>
                  <Text style={styles.amountTxt}>{item.instruction}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: "white"
  },
  recipeImage: {
    width: "100%"
  },
  infoView: {
    flex: 1,
    justifyContent: "center",
    borderBottomColor: "#E8E7E7",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  recipeName: {
    color: "#354760",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    marginTop: 15,
    marginHorizontal: 15
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  
  subView: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 5,
    marginBottom:10
  },
  subTitle: {
    color: "#8B95A4",
    fontSize: 16,
    fontFamily: "Times New Roman"
  },
  subTitleAmmount: {
    color: "#354760",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  calView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subCalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderLeftColor: "#E8E7E7",
    borderRightColor: "#E8E7E7",
    marginBottom: 10
  },
  ingredientView: {
    flex: 1,
    justifyContent: "center",
    borderTopColor: "#E8E7E7",
    borderTopWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10
  },
  header: {
    padding: 10,
    color: "#354760",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Times New Roman"
  },
  headerView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  productImage: {
    width: 66,
    height: 44
  },
  product: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  nameTxt: {
    color: "#101C1E",
    fontSize: 12
  },
  amountTxt: {
    color: "#6E7B8D",
    fontSize: 10
  },
  ingredientContent: {
    flex: 2
  },
  icon: {
    width: 20,
    height: 20
  }
});
export default RecipeDetail;
