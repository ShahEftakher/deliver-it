import { auth } from "firebase";
import React, { useEffect, useContext, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
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
        <View>
          <HeaderComponent navigation={props.navigation} />
          <ScrollView>
            <View>
              <Card>
                <View style={{ alignItems: "center" }}>
                  <Avatar
                    rounded
                    size="xlarge"
                    icon={{ name: "user", type: "font-awesome" }}
                    onPress={() => console.log("Works!")}
                    containerStyle={{
                      flex: 2,
                      marginLeft: 10,
                      marginTop: 50,
                      backgroundColor: "blue",
                    }}
                  />
                </View>
                <Text style={styles.textStyle}>Name : {userInfo.name}</Text>
                <Text style={styles.textStyle}>Email: {userInfo.email}</Text>
                <TouchableOpacity
                  onPress={() => {
                    let phoneNumber = userInfo.contact;
                    const args = {
                      number: phoneNumber,
                      prompt: true,
                    };
                    call(args).catch((error) => {
                      alert(error);
                    });
                  }}
                >
                  <Text style={styles.textStyle}>
                    Phone: {userInfo.contact}
                  </Text>
                </TouchableOpacity>
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
    fontSize: 20,
    color: "darkblue",
    paddingVertical: 10,
  },
});
export default ProfileScreen;
