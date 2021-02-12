import React, { useContext, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Input, Button, Card, colors } from "react-native-elements";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import { AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.authViewStyle}>
          <Card
            containerStyle={{
              borderRadius: 10,
              marginTop: 20,
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
            <Card.Title>Deliver-it</Card.Title>
            <Card.Divider />
            <Input
              leftIcon={
                <FontAwesome name="envelope" size={24} color="red" />
              }
              placeholder="E-mail Address"
              onChangeText={(currentInput) => {
                setEmail(currentInput);
              }}
            />

            <Input
              placeholder="Password"
              leftIcon={<Feather name="key" size={24} color="red" />}
              secureTextEntry={true}
              onChangeText={(currentInput) => {
                setPassword(currentInput);
              }}
            />

            {false ? (
              <Button
                icon={
                  <ActivityIndicator
                    size="large"
                    color="white"
                    animating={true}
                  />
                }
                title="  Loading..."
              />
            ) : (
              <>
                <Button
                  icon={<AntDesign name="login" size={24} color="white" />}
                  title="  Sign In!"
                  buttonStyle={{ backgroundColor: "red" }}
                  onPress={() => {
                    firebase
                      .auth()
                      .signInWithEmailAndPassword(email, password)
                      .then((userCreds) => {
                        (async function () {
                          let userInfo;
                          firebase
                            .firestore()
                            .collection("users")
                            .doc(userCreds.user.uid)
                            .get()
                            .then((doc) => {
                              userInfo = doc.data();
                              auth.setUserInfo(userInfo);
                            })
                            .catch((error) => {
                              alert(error);
                            });
                        })();
                        auth.setIsLoggedIn(true);
                        auth.setCurrentUser(userCreds.user);
                      })
                      .catch((error) => {
                        alert(error);
                      });
                  }}
                />
                <Button
                  type="clear"
                  icon={<AntDesign name="user" size={24} color="red" />}
                  title="  Don't have an account?"
                  titleStyle={{ color: "red" }}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                />
              </>
            )}
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};
const styles = StyleSheet.create({
  authViewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffe6e6",
  },
});
export default SignInScreen;
