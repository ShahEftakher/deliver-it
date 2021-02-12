import { auth } from "firebase";
import React, { useEffect, useContext, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Image, Text, Avatar } from "react-native-elements";
import HeaderComponent from "../components/HeaderComponent";
import { AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import call from "react-native-phone-call";

const ProfileScreen = (props) => {
  const userInfo = props.route.params;
  console.log(userInfo);
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={{ backgroundColor: "#ffe6e6", flex: 1 }}>
          <HeaderComponent navigation={props.navigation} />
          <ScrollView>
            <View>
              <Card
                containerStyle={{
                  borderRadius: 10,
                  marginTop: 50,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 6,
                  elevation: 7,
                  marginBottom: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Avatar
                    rounded
                    size="xlarge"
                    icon={{ name: "user", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    containerStyle={{
                      flex: 2,
                      marginLeft: 8,
                      marginTop: 50,
                      marginBottom: 10,
                      backgroundColor: "red",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 10,
                      elevation: 7,
                    }}
                  />
                  <Text style={styles.roleStyle}>
                    {userInfo.role.toUpperCase()}
                  </Text>
                  <Text></Text>
                </View>
                <Text style={styles.textStyle}>
                  Name: {userInfo.name.toUpperCase()}
                </Text>
                <Text style={styles.textStyle}>Email: {userInfo.email}</Text>
                <Text style={styles.textStyle}>Phone: {userInfo.contact}</Text>
                <Text></Text>
                <Text></Text>
              </Card>
            </View>
          </ScrollView>
        </View>
      )}
    </AuthContext.Consumer>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: "darkblue",
    paddingVertical: 10,
    marginTop: 15,
    fontFamily: "sans-serif-condensed",
  },
  roleStyle: {
    fontSize: 25,
    fontFamily: "sans-serif-condensed",
  },
});
export default ProfileScreen;
