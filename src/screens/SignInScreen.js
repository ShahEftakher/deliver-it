import React, { useContext, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.authViewStyle}>
      <Card>
        <Card.Title>Welcome to Deliver-it</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<FontAwesome name="envelope" size={24} color="orange" />}
          placeholder="E-mail Address"
          onChangeText={(currentInput) => {
            setEmail(currentInput);
          }}
        />

        <Input
          placeholder="Password"
          leftIcon={<Feather name="key" size={24} color="orange" />}
          secureTextEntry={true}
          onChangeText={(currentInput) => {
            setPassword(currentInput);
          }}
        />

        {false ? (
          <Button
            icon={
              <ActivityIndicator size="large" color="white" animating={true} />
            }
            title="  Loading..."
          />
        ) : (
          <>
            <Button
              icon={<AntDesign name="login" size={24} color="white" />}
              title="  Sign In!"
              onPress={() => {
                signIn(email, password, userDispatch, uiDispatch, dataDispatch);
              }}
            />
            <Button
              type="clear"
              icon={<AntDesign name="user" size={24} color="dodgerblue" />}
              title="  Don't have an account?"
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            />
          </>
        )}
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  authViewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
export default SignInScreen;
