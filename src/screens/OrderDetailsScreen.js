import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card,Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderComponent from "../components/HeaderComponent";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const OrderDeatils = ({navigation}) => {
  return (
    <View style={styles.viewStyleOuter}>
      <HeaderComponent navigation={navigation} />
      <Card containerStyle={styles.cardStyle}>
        <View style={styles.fieldStyle}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.textStyle}>Name: </Text>
          <Text style={styles.infoText}>New Text</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.fieldStyle}>
            <FontAwesome name="phone" size={24} color="black" />
            <Text style={styles.textStyle}>Phone: </Text>
            <Text style={styles.infoText}></Text>
          </View>
        </TouchableOpacity>

        <View style={styles.fieldStyle}>
          <FontAwesome5 name="shopping-bag" size={24} color="black" />
          <Text style={styles.textStyle}>Item: </Text>
          <Text style={styles.infoText}>New Text</Text>
        </View>
        <View style={styles.fieldStyle}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={styles.textStyle}>Pickup location: </Text>
          <Text style={styles.infoText}>New Text</Text>
        </View>
        <View style={styles.fieldStyle}>
          <FontAwesome name="location-arrow" size={24} color="black" />
          <Text style={styles.textStyle}>Deliver location: </Text>
          <Text style={styles.infoText}>New Text</Text>
        </View>
        <View style={styles.fieldStyle}>
          <FontAwesome5 name="money-check" size={20} color="black" />
          <Text style={styles.textStyle}>Price: </Text>
          <Text style={styles.infoText}>New Text</Text>
        </View>
        <Button
          icon={<AntDesign name="checkcircleo" size={24} color="white" />}
          title=" Accept"
          type="solid"
          buttonStyle={{backgroundColor:"red"}}
        ></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyleOuter: {
    flex: 1,
    backgroundColor: "#ffe6e6",
    alignSelf: "baseline",
  },
  cardStyle: {
    backgroundColor: "#ffb3b3",
  },
  textStyle: {
    lineHeight: 80,
    fontFamily: "sans-serif",
    textAlign: "auto",
    fontWeight: "600",
    fontSize: 20,
  },
  fieldStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoText: {
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
  },
});

export default OrderDeatils;