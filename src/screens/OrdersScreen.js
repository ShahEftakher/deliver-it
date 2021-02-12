import { auth } from "firebase";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import Order from "../components/Order";
import { AuthContext } from "../context/AuthContext";
import * as firebase from "firebase";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import "firebase/firestore";

const OrderScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);

  const loadOrderUser = async () => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot((querySnapshot) => {
        let temp_order = [];
        querySnapshot.forEach((doc) => {
          temp_order.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOrders(temp_order);
      });
  };

  useEffect(() => {
    loadOrderUser();
  }, []);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.MainContainer}>
          <ScrollView>
            <HeaderComponent navigation={navigation} />

            <FlatList
              data={orders}
              renderItem={({ item }) => {
                return <Order orderData={item} navigation={navigation} />;
              }}
            />
          </ScrollView>
          {auth.userInfo.role === "user" ? (<TouchableOpacity
            activeOpacity={0.5}
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate("Add Order")}
          >
            <Image
              source={{
                uri:
                  "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png",
              }}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>): null}
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#ffcc80",
  },

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default OrderScreen;
