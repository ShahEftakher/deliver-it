import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, Pressable, Alert } from "react-native";
import { Card, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderComponent from "../components/HeaderComponent";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import call from "react-native-phone-call";
import Order from "../components/Order";
import * as firebase from "firebase";
import "firebase/firestore";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const OrderDeatils = (props) => {
  console.log(props);
  const orderData = props.route.params.orderData.data;
  const [showModal, setShowModal] = useState(false);
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyleOuter}>
          <HeaderComponent navigation={props.navigation} />
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Card containerStyle={styles.cardStyle}>
              <View style={styles.fieldStyle}>
                <FontAwesome name="user" size={24} color="black" />
                <Text style={styles.textStyleApp}>Name: </Text>
                <Text style={styles.infoText}>{" " + orderData.name}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  let phoneNumber = orderData.phoneNumber;
                  const args = {
                    number: phoneNumber,
                    prompt: true,
                  };
                  call(args).catch((error) => {
                    alert(error);
                  });
                }}
              >
                <View style={styles.fieldStyle}>
                  <FontAwesome name="phone" size={24} color="black" />
                  <Text style={styles.textStyleApp}>Phone: </Text>
                  <Text style={styles.infoText}>
                    {" " + orderData.phoneNumber}
                  </Text>
                </View>
              </TouchableOpacity>
              <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                  setShowModal(!showModal);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <SimpleLineIcons name="call-out" size={24} color="black" />
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        let phoneNumber = orderData.courierNumber;
                        const args = {
                          number: phoneNumber,
                          prompt: true,
                        };
                        call(args).catch((error) => {
                          alert(error);
                        });
                        setShowModal(!showModal);
                      }}
                    >
                      <Text style={styles.textStyle}>
                        {"Call: " + orderData.pickedBy}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <View style={styles.fieldStyle}>
                <FontAwesome5 name="shopping-bag" size={24} color="black" />
                <Text style={styles.textStyleApp}>Item: </Text>
                <Text style={styles.infoText}>{" " + orderData.item}</Text>
              </View>
              <View style={styles.fieldStyle}>
                <Entypo name="location-pin" size={24} color="black" />
                <Text style={styles.textStyleApp}>Pickup location: </Text>
                <Text style={styles.infoText}>{" " + orderData.pickup}</Text>
              </View>
              <View style={styles.fieldStyle}>
                <FontAwesome name="location-arrow" size={24} color="black" />
                <Text style={styles.textStyleApp}>Deliver location: </Text>
                <Text style={styles.infoText}>
                  {" " + orderData.destination}
                </Text>
              </View>
              <View style={styles.fieldStyle}>
                <FontAwesome5 name="money-check" size={20} color="black" />
                <Text style={styles.textStyleApp}>Price: </Text>
                <Text style={styles.infoText}>{" calculate function"}</Text>
              </View>
              {auth.userInfo.role === "deliveryMan" &&
              !auth.userInfo.isPicked ? (
                <Button
                  icon={
                    <AntDesign name="checkcircleo" size={24} color="white" />
                  }
                  title=" Accept"
                  type="solid"
                  buttonStyle={{ backgroundColor: "red" }}
                  onPress={() => {
                    firebase
                      .firestore()
                      .collection("orders")
                      .doc(props.route.params.orderData.id)
                      .update({
                        pickedBy: auth.CurrentUser.displayName,
                        isPicked: true,
                        courierNumber: auth.userInfo.contact,
                      })
                      .then(() => {
                        alert("Accpeted!");
                      })
                      .catch((error) => {
                        alert(error);
                      });
                  }}
                ></Button>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setShowModal(true);
                    }}
                  >
                    <View style={styles.fieldStyle}>
                      <Feather name="user-check" size={24} color="black" />
                      <Text style={styles.textStyleApp}>Picked By: </Text>
                      <Text style={styles.infoText}>{orderData.pickedBy}</Text>
                    </View>
                  </TouchableOpacity>
                  {auth.userInfo.role === "deliveryMan" ? (
                    <Button
                      icon={
                        <Ionicons
                          name="checkmark-done-circle-outline"
                          size={24}
                          color="white"
                        />
                      }
                      title=" Delivered"
                      type="solid"
                      buttonStyle={{ backgroundColor: "red" }}
                      onPress={() => {}}
                    ></Button>
                  ) : null}
                </View>
              )}
            </Card>
          </View>
        </View>
      )}
    </AuthContext.Consumer>
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
  textStyleApp: {
    lineHeight: 80,
    fontFamily: "sans-serif",
    textAlign: "auto",
    fontWeight: "600",
    fontSize: 14,
  },
  fieldStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoText: {
    fontWeight: "400",
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ffe6e6",
    borderRadius: 20,
    padding: 35,
    opacity: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    top: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default OrderDeatils;
